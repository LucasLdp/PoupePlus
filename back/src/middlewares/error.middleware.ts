import { ApiError } from "@utils/api-error";
import { errors } from "@vinejs/vine";
import { NextFunction, Request, Response } from "express";

export function ErrorMiddleware(
	error: Error,
	req: Request,
	res: Response,
	next: NextFunction,
) {
	if (error instanceof ApiError) {
		return res.status(error.status).json({
			status: error.status,
			message: error.message,
		});
	}

	if (error instanceof errors.E_VALIDATION_ERROR) {
		return res.status(400).json({
			status: 400,
			message: error.messages.map((message: any) => message.message),
		});
	}

	console.log(error);
	return res.status(500).json({
		status: 500,
		message: "Erro interno no servidor",
	});
}
