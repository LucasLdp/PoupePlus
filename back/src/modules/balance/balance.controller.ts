import { Request, Response } from "express";
import { BalanceService } from "./balance.service";

export class BalanceController {
	constructor(private balanceService: BalanceService) {}

	index = async (req: Request, res: Response) => {
		const balances = await this.balanceService.getAllBalances();
		return res.json(balances);
	};

	show = async (req: Request, res: Response) => {
		const { id } = req.params;
		const balance = await this.balanceService.getOneBalance(id);
		return res.json(balance);
	};

	store = async (req: Request, res: Response) => {
		const data = req.body;
		const result = await this.balanceService.createBalance(data);
		return res.status(201).json(result);
	};

	update = async (req: Request, res: Response) => {
		const { id } = req.params;
		const data = req.body;
		const result = await this.balanceService.updateBalance(id, data);
		return res.json(result);
	};

	destroy = async (req: Request, res: Response) => {
		const { id } = req.params;
		const result = await this.balanceService.deleteBalance(id);
		return res.json(result);
	};
}
