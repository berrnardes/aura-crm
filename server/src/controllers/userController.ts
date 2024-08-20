import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";
import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { db } from "../db";
import user from "../db/schemas/user";

export const register = async (req: Request, res: Response) => {
	try {
		const { name, password, email, phone } = req.body;

		// Search in batabase by the email
		const existingEmail = await db
			.select()
			.from(user)
			.where(eq(user.email, email));

		// Check if the email already exists
		if (existingEmail) {
			res
				.status(StatusCodes.FORBIDDEN)
				.json({ message: "Email already exists" });
		}

		const salt = await bcrypt.genSalt(15);

		// Create a hash password
		const hashedPassword = await bcrypt.hash(password, salt);

		const createdUser = await db.insert(user).values({
			name,
			password: hashedPassword,
			email,
			phone,
		});

		res.status(StatusCodes.ACCEPTED).json({ sucess: true, user: createdUser });
	} catch (error) {
		console.log(error);
		res
			.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.json({ sucess: false, error });
	}
};
