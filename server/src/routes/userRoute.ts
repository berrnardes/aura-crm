import express, { type Request, type Response } from "express";
import { validate } from "../../lib/zod-middleware";
import { login, register } from "../controllers/userController";
import { userLoginSchema, userRegisterSchema } from "../schemas/user";

const router = express.Router();

router.get(
	"/",

	(req: Request, res: Response) => {
		return res.json({ message: "Users route" });
	}
);

router.post("/create", validate(userRegisterSchema), register);
router.post("/login", validate(userLoginSchema), login);

export default router;
