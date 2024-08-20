import { z } from "zod";

export const userRegisterSchema = z.object({
	body: z.object({
		name: z
			.string({ message: "Not a valid name" })
			.min(3, { message: "Name must have 3 character" })
			.max(62, { message: "Max lenght reached" }),
		username: z
			.string({ message: "Not a valid username" })
			.min(3, { message: "Username must have 3 character" })
			.max(62, { message: "Max lenght reached" }),
		email: z.string().email({ message: "Invalid Email" }),
		password: z.string(),
	}),
});

export const userLoginSchema = z.object({
	body: z.object({
		username: z
			.string({ message: "Not a valid username" })
			.min(3, { message: "Username must have 3 character" })
			.max(62, { message: "Max lenght reached" }),
		password: z.string(),
	}),
});
