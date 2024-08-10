import { PrismaClient } from "@prisma/client";
import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const client = new PrismaClient();

export const createUser = async (req: Request, res: Response) => {
	try {
		const { name, email } = req.body;

		const user = await client.user.create({
			data: {
				email,
				name,
			},
		});

		res.status(StatusCodes.ACCEPTED).json(user);
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR);
	}
};
