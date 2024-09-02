import { Expense, PrismaClient } from "@prisma/client";
import { createExpenseDTO, updateExpenseDTO } from "./expenseDTO";

export class ExpenseRepository {
	constructor(private prisma: PrismaClient) {}

	async getAll(): Promise<Expense[]> {
		return await this.prisma.expense.findMany();
	}

	async getOne(id: string): Promise<Expense | null> {
		return await this.prisma.expense.findUnique({ where: { id } });
	}

	async getBy(params: Partial<Expense>): Promise<Expense | null> {
		return await this.prisma.expense.findFirst({ where: params });
	}

	async create(data: createExpenseDTO): Promise<Expense> {
		return await this.prisma.expense.create({ data });
	}

	async update(id: string, data: updateExpenseDTO): Promise<Expense> {
		return await this.prisma.expense.update({ where: { id }, data });
	}

	async destroy(id: string): Promise<Expense> {
		return await this.prisma.expense.delete({ where: { id } });
	}
}
