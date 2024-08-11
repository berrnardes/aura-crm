import { z } from "zod";

// Login Schema
export const loginSchema = z.object({
	username: z.string(),
	password: z.string(),
});

export const registerSchema = z.object({
	fullName: z
		.string()
		.min(3, { message: "Must be at least 3 characters" })
		.max(64, { message: "Too large" }),
	username: z
		.string()
		.min(3, { message: "Must be at least 3 characters" })
		.max(64, { message: "Too large" }),
	email: z.string().email({ message: "Invalid email" }),
	password: z.string().min(4, { message: "Must be at least 3 characters" }),
});
