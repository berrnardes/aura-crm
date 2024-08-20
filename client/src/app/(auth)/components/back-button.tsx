import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

interface BackButton {
	href: string;
	label: string;
}

const BackButton = ({ href, label }: BackButton) => {
	return (
		<Link
			href={href}
			className={buttonVariants({
				variant: "ghost",
				size: "sm",
				className: "font-semibold text-orange-500 py-6 px-6",
			})}
		>
			{label}
		</Link>
	);
};

export default BackButton;
