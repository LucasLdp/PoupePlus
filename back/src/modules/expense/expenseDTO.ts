export interface createExpenseDTO {
	userId: string;
	amount: number;
	description: string;
}

export interface updateExpenseDTO extends Partial<createExpenseDTO> {}
