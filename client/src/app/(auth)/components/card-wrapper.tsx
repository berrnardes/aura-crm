import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import React from "react";
import BackButton from "./back-button";
import Header from "./header";
import Providers from "./providers";

interface CardWrapperProps {
	showProviders?: boolean;
	children: React.ReactNode;
	header: string;
	backButtonHref: string;
	backButtonLabel: string;
	label: string;
}

const CardWrapper = ({
	showProviders = true,
	children,
	header,
	backButtonHref,
	backButtonLabel,
	label,
}: CardWrapperProps) => {
	return (
		<Card className="w-full border-0 shadow-none flex flex-col items-center justify-center px-5 mx-auto">
			<CardHeader>
				<Header title={header} />
			</CardHeader>
			<CardContent className="w-full">{children}</CardContent>
			{showProviders && (
				<CardFooter className="w-full">
					<Providers label={label} />
				</CardFooter>
			)}
			<CardFooter>
				<BackButton href={backButtonHref} label={backButtonLabel} />
			</CardFooter>
		</Card>
	);
};

export default CardWrapper;
