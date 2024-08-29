import { Request, Response } from "express";
import { ExpenseRepository } from "@repositories/expense.repository";
import { NotFound } from "@errors/ApiError";
import { createExpenseDTO, updateExpenseDTO } from "@dtos/expenseDTO";

export class ExpenseController {
	constructor(private expenseRepository: ExpenseRepository) {}

	index = async (req: Request, res: Response) => {
		const expenses = await this.expenseRepository.getAll();
		return res.json(expenses);
	};

	store = async (req: Request, res: Response) => {
		const data: createExpenseDTO = req.body;
		await this.expenseRepository.create(data);
		return res.status(201).json({ message: "Despesa criada" });
	};

	show = async (req: Request, res: Response) => {
		const { id } = req.params;
		const expense = await this.expenseRepository.getOne(id);
		if (!expense) {
			throw new NotFound("Despesa não encontada");
		}
		return expense;
	};

	update = async (req: Request, res: Response) => {
		const { id } = req.params;
		const expense = await this.expenseRepository.getOne(id);
		if (!expense) {
			throw new NotFound("Despesa não encontrada");
		}
		const data: updateExpenseDTO = req.body;
		await this.expenseRepository.update(id, data);
		return res.status(200).json({ message: "Despesa atualizada" });
	};

	destroy = async (req: Request, res: Response) => {
		const { id } = req.params;
		const expense = await this.expenseRepository.getOne(id);
		if (!expense) {
			throw new NotFound("Despesa não encontrada");
		}
		await this.expenseRepository.destroy(id);
		return res.status(200).json({ message: "Despesa excluída" });
	};
}
