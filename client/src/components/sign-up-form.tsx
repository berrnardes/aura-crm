"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const formSchema = z.object({
	name: z.string().min(2, { message: "Name must be at least 2 characters" }),
	username: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
	email: z
		.string()
		.min(2, { message: "Email must at least 2 charcters" })
		.email(),
	password: z
		.string()
		.min(4, { message: "Password must be at least 4 characters" }),
});

type tFormSchema = z.infer<typeof formSchema>;

export function SignUpForm() {
	const { mutate: createUser, isPending } = useMutation({
		mutationFn: async (values: tFormSchema) => {
			const response = await axios.post("http://localhost:5000/user/create", {
				name: values.name,
				email: values.email,
				password: values.password,
				username: values.username,
			});

			return response;
		},
	});

	const form = useForm<tFormSchema>({
		defaultValues: {
			email: "",
			name: "",
			username: "",
		},
		resolver: zodResolver(formSchema),
	});

	const onSubmit = (values: tFormSchema) => {
		createUser(values);
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input placeholder="John Doe" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input placeholder="johndoe" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>E-mail</FormLabel>
							<FormControl>
								<Input placeholder="john@doe.com" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input type="password" placeholder="*******" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button disabled={isPending} type="submit">
					Submit
				</Button>
			</form>
		</Form>
	);
}
