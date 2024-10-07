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
        className: "!rounded-full px-6 py-6 font-semibold text-primary",
      })}
    >
      {label}
    </Link>
  );
};

export default BackButton;
