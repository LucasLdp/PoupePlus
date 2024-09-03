import { Request, Response } from "express";
import { UserService } from "./user.service";

export class UserController {
	constructor(private userService: UserService) {}

	index = async (req: Request, res: Response) => {
		const users = await this.userService.getAllUsers();
		return res.json(users);
	};

	show = async (req: Request, res: Response) => {
		const { id } = req.params;
		const user = await this.userService.getOneUser(id);
		return res.json(user);
	};

	store = async (req: Request, res: Response) => {
		const data = req.body;
		const result = await this.userService.createUser(data);
		return res.status(200).json(result);
	};

	update = async (req: Request, res: Response) => {
		const { id } = req.params;
		const data = req.body;
		const result = await this.userService.updateUser(id, data);
		return res.json(result);
	};

	destroy = async (req: Request, res: Response) => {
		const { id } = req.params;
		const result = await this.userService.deleteUser(id);
		return res.json(result);
	};

	resetAndDeleteRelations = async (req: Request, res: Response) => {
		const { id } = req.params;
		const result = await this.userService.resetUser(id);
		return res.json(result);
	};
}
