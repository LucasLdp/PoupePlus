export interface UserRequestTypes {
	id: string;
	name: string;
	balances: Balance[];
	expenses: Expense[];
	totalAmount: number | null;
}


interface Expense {
	id: string;
	userId: string;
	amount: number;
	description: string;
	createdAt: Date;
}


export interface Balance {
	id: string;
	userId: string;
	amount: number;
	description: string;
	createdAt: Date;
}
