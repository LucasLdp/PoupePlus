export interface createExpenseDTO {
	amount: number;
	description: string;
	userId: string;
}

export interface updateExpenseDTO extends Partial<createExpenseDTO> {}
