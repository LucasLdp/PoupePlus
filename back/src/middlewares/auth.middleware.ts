import { Forbidden, Unauthorized } from "@/utils/api-error";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";


interface AuthRequest extends Request {
	user?: string | object;
}

export function AuthMiddleware(
	req: AuthRequest,
	res: Response,
	next: NextFunction,
) {
	const token = req.headers.authorization?.split(" ")[1];

	if (!token) {
		throw new Unauthorized("Acesso não autorizado");
	}

	try {
		const SECRET = process.env.SECRET_KEY;
		const decoded = jwt.verify(token, SECRET!);
		req.user = decoded;
		next();
	} catch (error) {
		throw new Forbidden("Acesso não autorizado");
	}
}
