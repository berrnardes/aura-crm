"use client";

import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
	const pathname = usePathname();

	console.log(pathname);

	return (
		<div className="text-zinc-300 max-w-40 lg:max-w-52 hidden bg-zinc-800 w-full md:flex items-start py-5 px-3 justify-between flex-col h-full ">
			<div className="w-full">
				<Image src="/logo-white.png" width={130} height={100} alt="Logo" />

				<ul className="flex flex-col gap-4 mt-5 items-start justify-center w-full">
					<li className="w-full px-4 py-1 rounded-sm">
						<Link
							href="/dashboard"
							className={cn(
								"flex justify-start items-center gap-2",
								pathname === "/dashboard"
									? "bg-zinc-500 text-green-400 rounded-md p-2 w-full "
									: ""
							)}
						>
							<LayoutDashboard className="w-4 h-4" />
							Dashboard
						</Link>
					</li>
					<li>
						<Link href="/dashboard">Products</Link>
					</li>
					<li>
						<Link href="/dashboard">Revenue</Link>
					</li>
					<li>
						<Link href="/dashboard">Clients</Link>
					</li>
				</ul>
			</div>
			<div>USER</div>
		</div>
	);
};

export default Sidebar;
