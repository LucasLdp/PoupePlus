import { NotFound } from "@/utils/api-error";
import { BalanceRepository } from "./balance.repository";
import { createBalanceDTO, updateBalanceDTO } from "./balanceDTO";

export class BalanceService {
	constructor(private balanceRepository: BalanceRepository) {}

	getAllBalances = async () => {
		const balances = await this.balanceRepository.getAll();
		return balances.map((balance) => ({
			id: balance.id,
			userId: balance.userId,
			amount: balance.amount,
			description: balance.description,
		}));
	};

	getOneBalance = async (id: string) => {
		const balance = await this.balanceRepository.getOne(id);
		if (!balance) {
			throw new NotFound("Saldo não encontrado");
		}
		return {
			id: balance.id,
			userId: balance.userId,
			amount: balance.amount,
			description: balance.description,
		};
	};

	createBalance = async (data: createBalanceDTO) => {
		const newBalance = await this.balanceRepository.create(data);
		return { message: "Saldo criado com sucesso", id: newBalance.id };
	};

	updateBalance = async (id: string, data: updateBalanceDTO) => {
		const balance = await this.balanceRepository.getOne(id);
		if (!balance) {
			throw new NotFound("Saldo não encontrado");
		}
		await this.balanceRepository.update(id, data);
		return { message: "Saldo atualizado com sucesso" };
	};

	deleteBalance = async (id: string) => {
		const balance = await this.balanceRepository.getOne(id);
		if (!balance) {
			throw new NotFound("Saldo não encontrado");
		}
		await this.balanceRepository.destroy(id);
		return { message: "Saldo deletado com sucesso" };
	};
}
