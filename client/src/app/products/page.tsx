import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTrigger,
} from "@/components/ui/dialog";
import {} from "@radix-ui/react-dialog";

const Products = () => {
	return (
		<div className="h-full w-full flex flex-col gap-4 items-center justify-center">
			<h1>Products</h1>
			<Dialog>
				<DialogTrigger>
					<Button>Create Product</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>Create Product</DialogHeader>
					<div>
						<form action="">
							<input type="text" placeholder="name" />
						</form>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default Products;
