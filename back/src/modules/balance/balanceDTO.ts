export interface createBalanceDTO {
	userId: string;
	amount: number;
	description: string;
}

export interface updateBalanceDTO extends Partial<createBalanceDTO> {}
