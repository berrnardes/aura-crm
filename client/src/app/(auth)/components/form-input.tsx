"use client";

import {
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";

interface FormInputProps {
	name: string;
	type?: string;
	placebholder: string;
	formInstance: UseFormReturn<any>;
}

const FormInput = ({
	formInstance,
	name,
	placebholder,
	type,
}: FormInputProps) => {
	return (
		<FormField
			control={formInstance.control}
			name={name}
			render={({ field }) => (
				<FormItem className="w-full">
					<FormControl>
						<Input
							type={type}
							className="rounded-3xl bg-primary/5 border-none py-6 px-5 flex items-center font-medium justify-center"
							placeholder={placebholder}
							{...field}
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default FormInput;
