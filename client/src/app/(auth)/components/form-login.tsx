"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { loginSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormInput from "./form-input";

const FormLogin = () => {
	const form = useForm<z.infer<typeof loginSchema>>({
		defaultValues: {
			username: "",
			password: "",
		},
		resolver: zodResolver(loginSchema),
	});

	return (
		<form className="flex flex-col gap-y-6 px-2 sm:px-10 max-w-lg items-center w-full mx-auto justify-center">
			<Form {...form}>
				<FormInput
					formInstance={form}
					name="username"
					placebholder="Username"
				/>
				<FormInput
					formInstance={form}
					name="password"
					placebholder="*******"
					type="password"
				/>
				<Button className="w-full shadow-lg rounded-3xl py-6 px-5">
					Login
				</Button>
			</Form>
		</form>
	);
};

export default FormLogin;
