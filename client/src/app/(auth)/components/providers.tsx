import Facebook from "@/components/icons/facebook";
import Google from "@/components/icons/google";
import { Button } from "@/components/ui/button";

const Providers = ({ label }: { label: string }) => {
	return (
		<div className="max-w-lg items-center justify-center w-full px-2 sm:px-10 mx-auto flex flex-col">
			<h3 className="text-sm bg-white p-2 text-zinc-500 z-10 font-medium text-center leading-tight">
				Or {label} with:
			</h3>
			<div className="w-full border-b relative -top-[17px]" />
			<div className="flex items-center gap-4 justify-around w-full  mt-3">
				<Button variant="outline" className="w-full rounded-3xl flex gap-2">
					<Google className="w-5 h-5" />
					Google
				</Button>
				<Button variant="outline" className="w-full rounded-3xl flex gap-2">
					<Facebook className="w-5 h-5" />
					Facebook
				</Button>
			</div>
		</div>
	);
};

export default Providers;
