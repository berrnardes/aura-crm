"use client";

import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Menu } from "lucide-react";
import Image from "next/image";

const SidebarMobile = () => {
	const isMobile = useMediaQuery("(min-width: 768px)");

	if (isMobile) return null;

	return (
		<div>
			<Sheet>
				<SheetTrigger asChild>
					<Button
						className="border rounded-full p-3 relative top-3 left-3"
						variant="ghost"
					>
						<Menu className="w-4 h-4" />
						<span className="sr-only">Toggle Menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="left" className="bg-zinc-100 max-w-64">
					<SheetHeader>
						<SheetTitle>
							<Image
								src="/logo-white.png"
								alt="Logo"
								width={130}
								height={100}
							/>
						</SheetTitle>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default SidebarMobile;
