import express from "express";
import { z } from "zod";
import { validate } from "../../lib/zod-middleware";
import { createProduct, getProduct } from "../controllers/productController";
import { productSchema } from "../schemas/products";

const app = express.Router();

app.get(
	"/",
	validate(
		z.object({
			query: z.object({
				search: z.string(),
			}),
		})
	),
	getProduct
);

app.post("/", validate(productSchema), createProduct);

export default app;
