"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { registerSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormInput from "./form-input";

const FormRegister = () => {
	const form = useForm({
		defaultValues: {
			fullName: "",
			username: "",
			email: "",
			password: "",
		},
		resolver: zodResolver(registerSchema),
	});

	return (
		<form className="flex flex-col gap-y-6 px-2 sm:px-10 max-w-lg items-center w-full mx-auto justify-center">
			<Form {...form}>
				<FormInput
					formInstance={form}
					name="fullName"
					placebholder="Full Name"
				/>
				<FormInput
					formInstance={form}
					name="email"
					placebholder="Email"
					type="email"
				/>
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
				<Button className="w-full rounded-3xl py-6 px-5">Register</Button>
			</Form>
		</form>
	);
};

export default FormRegister;
