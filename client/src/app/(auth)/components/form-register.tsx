"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/components/ui/use-toast";
import { registerSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormInput from "./form-input";

type tRegisterSchema = z.infer<typeof registerSchema>;

const FormRegister = () => {
	const router = useRouter();

	const { mutate: createUser, isPending } = useMutation({
		mutationFn: async (values: tRegisterSchema) => {
			const { data, statusText } = await axios.post(
				"http://localhost:5000/user/create",
				{
					name: values.fullName,
					password: values.password,
					email: values.email,
					username: values.username,
				},
				{ withCredentials: true }
			);

			return data;
		},
		onError: (error) => {
			return toast({
				title: "Something went wrong",
				description: error.message,
				variant: "destructive",
				action: <ToastAction altText="Try Again">Try Again</ToastAction>,
			});
		},
		onSuccess: () => {
			router.push("/dashboard");
		},
	});

	const form = useForm({
		defaultValues: {
			fullName: "",
			username: "",
			email: "",
			password: "",
		},
		resolver: zodResolver(registerSchema),
	});

	const register = (values: tRegisterSchema) => {
		createUser(values);
		form.reset();
	};

	return (
		<form
			className="flex flex-col gap-y-6 px-2 sm:px-10 max-w-lg items-center w-full mx-auto justify-center"
			onSubmit={form.handleSubmit(register)}
		>
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
				<Button
					disabled={isPending}
					className="w-full text-white font-semibold shadow-md rounded-3xl py-6 px-5"
				>
					{isPending ? (
						<Loader2 className="w-4 h-4 animate-spin" />
					) : (
						<span>Register</span>
					)}
				</Button>
			</Form>
		</form>
	);
};

export default FormRegister;
