import { Request, Response } from "express";
import { ExpenseService } from "./expense.service";

export class ExpenseController {
	constructor(private expenseService: ExpenseService) {}

	index = async (req: Request, res: Response) => {
		const expenses = await this.expenseService.getAllExpenses();
		return res.json(expenses);
	};

	show = async (req: Request, res: Response) => {
		const { id } = req.params;
		const expense = await this.expenseService.getOneExpense(id);
		return res.json(expense);
	};

	store = async (req: Request, res: Response) => {
		const data = req.body;
		const result = await this.expenseService.createExpense(data);
		return res.status(200).json(result);
	};

	update = async (req: Request, res: Response) => {
		const { id } = req.params;
		const data = req.body;
		const result = await this.expenseService.updateExpense(id, data);
		return res.json(result);
	};

	destroy = async (req: Request, res: Response) => {
		const { id } = req.params;
		const result = await this.expenseService.deleteExpense(id);
		return res.json(result);
	};
}
