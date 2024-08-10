import type { NextFunction, Request, Response } from "express";

// export const zodMiddleware = (schema: z.ZodObject<any, any>) => {
// 	return (req: Request, res: Response, next: NextFunction) => {
// 		try {
// 			schema.parseAsync(req.body);
// 			next();
// 		} catch (error) {
// 			if (error instanceof ZodError) {
// 				const errorMessage = error.errors.map((issue: any) => ({
// 					message: `${issue.path.join(".")} is ${issue.message}`,
// 				}));

// 				res
// 					.status(StatusCodes.BAD_REQUEST)
// 					.json({ error: "Invalid data", details: errorMessage });
// 			} else {
// 				res
// 					.status(StatusCodes.INTERNAL_SERVER_ERROR)
// 					.json({ message: "Internal Server Error" });
// 			}
// 		}
// 	};
// };

export const validate =
	(schema: any) => async (req: Request, res: Response, next: NextFunction) => {
		try {
			await schema.parseAsync({
				body: req.body,
				query: req.query,
				params: req.params,
			});
			return next();
		} catch (error) {
			return res.status(400).json(error);
		}
	};
