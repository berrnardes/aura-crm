import { z } from "zod";

export const productSchema = z.object({
	body: z.object({
		name: z
			.string()
			.min(2, { message: "Name must have more than 2 characters" }),
		price: z.string(),
		description: z.string().optional(),
		rating: z.string().optional(),
		stockQuantity: z.string(),
	}),
});
