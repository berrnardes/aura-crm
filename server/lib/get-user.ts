import type { NextFunction, Request, Response } from "express";

export const getUser = (req: Request, res: Response, next: NextFunction) => {
	const cookie = req.cookies;

	return next();
};
