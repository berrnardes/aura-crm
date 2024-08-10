import express, { type Request, type Response } from "express";
import { validate } from "../../lib/zod-middleware";
import { createUser } from "../controllers/userController";
import { userSchema } from "../schemas/user";

const router = express.Router();

router.get(
	"/",

	(req: Request, res: Response) => {
		return res.json({ message: "Users route" });
	}
);

router.post("/create", validate(userSchema), createUser);

export default router;
