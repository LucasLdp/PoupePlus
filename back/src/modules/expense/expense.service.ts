import { ExpenseRepository } from "modules/expense/expense.repository";
import { createExpenseDTO, updateExpenseDTO } from "./expenseDTO";

import { BadRequest, NotFound } from "@/utils/api-error";

export class ExpenseService {
	constructor(private expenseRepository: ExpenseRepository) {}

	getAllExpenses = async () => {
		const expenses = await this.expenseRepository.getAll();
		return expenses.map((expense) => {
			return {
				id: expense.id,
				userId: expense.userId,
				amount: expense.amount,
				description: expense.description,
				createdAt: expense.createdAt,
			};
		});
	};

	getOneExpense = async (id: string) => {
		const expense = await this.expenseRepository.getOne(id);
		if (!expense) {
			throw new NotFound("Despesa não encontrada");
		}
		return {
			id: expense.id,
			amount: expense.amount,
			description: expense.description,
			userId: expense.userId,
			createdAt: expense.createdAt,
		};
	};

	createExpense = async (data: createExpenseDTO) => {
		const existingExpense = await this.expenseRepository.getBy({
			description: data.description,
			userId: data.userId,
		});
		if (existingExpense) {
			throw new BadRequest("Essa despesa já existe para este usuário");
		}

		await this.expenseRepository.create(data);
		return { message: "Despesa criada com sucesso" };
	};

	updateExpense = async (id: string, data: updateExpenseDTO) => {
		const expense = await this.expenseRepository.getOne(id);
		if (!expense) {
			throw new NotFound("Despesa não encontrada");
		}
		await this.expenseRepository.update(id, data);
		return { message: "Despesa atualizada com sucesso" };
	};

	deleteExpense = async (id: string) => {
		const expense = await this.expenseRepository.getOne(id);
		if (!expense) {
			throw new NotFound("Despesa não encontrada");
		}
		await this.expenseRepository.destroy(id);
		return { message: "Despesa deletada com sucesso" };
	};
}
