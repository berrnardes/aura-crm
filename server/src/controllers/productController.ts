import { PrismaClient } from "@prisma/client";
import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const db = new PrismaClient();

export const getProduct = async (req: Request, res: Response) => {
	try {
		const search = req.query.search?.toString();

		const product = await db.products.findMany({
			where: {
				name: {
					equals: search,
				},
			},
		});

		res.json(product);
	} catch (error) {
		res.status(StatusCodes.BAD_GATEWAY);
	}
};

export const createProduct = async (req: Request, res: Response) => {
	try {
		const { name, description, rating, stockQuantity, price } = req.body;

		const priceInt = parseFloat(price);
		const ratingInt = parseFloat(rating);
		const stockInt = Number(stockQuantity);

		const productCreated = await db.products.create({
			data: {
				name,
				description,
				price: priceInt,
				rating: ratingInt,
				stockQuantity: stockInt,
			},
		});

		res.json(productCreated);
	} catch (error) {
		res.status(StatusCodes.BAD_REQUEST).json({ error });
	}
};
