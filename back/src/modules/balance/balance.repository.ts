import { Balance, PrismaClient } from "@prisma/client";
import { createBalanceDTO, updateBalanceDTO } from "./balanceDTO";

export class BalanceRepository {
	private prisma = new PrismaClient();

	getAll = async (): Promise<Balance[]> => {
		return await this.prisma.balance.findMany();
	};

	getOne = async (id: string): Promise<Balance | null> => {
		return await this.prisma.balance.findUnique({ where: { id } });
	};

	create = async (data: createBalanceDTO): Promise<Balance> => {
		return await this.prisma.balance.create({ data });
	};

	update = async (id: string, data: updateBalanceDTO): Promise<Balance> => {
		return await this.prisma.balance.update({
			where: { id },
			data,
		});
	};

	destroy = async (id: string): Promise<Balance> => {
		return await this.prisma.balance.delete({ where: { id } });
	};
}
