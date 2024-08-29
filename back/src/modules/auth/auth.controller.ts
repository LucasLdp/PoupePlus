import { Request, Response } from "express";
import { AuthService } from "./auth.service";
import { signupAuthDTO, singinAuthDTO } from "./authDTO";

export class AuthController {
	constructor(private authService: AuthService) {}

	login = async (req: Request, res: Response) => {
		const data: singinAuthDTO = req.body;
		const token = await this.authService.signIn(data);
		return res.json(token);
	};

	register = async (req: Request, res: Response) => {
		const data: signupAuthDTO = req.body;
		const message = await this.authService.signUp(data);
		return res.json(message);
	};
}
