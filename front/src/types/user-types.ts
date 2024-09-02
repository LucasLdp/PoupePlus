import { Balance } from "./balance-types";
import { Expense } from "./expenses-types";

export interface UserRequestTypes {
	id: string;
	name: string;
	balances: Balance[];
	expenses: Expense[];
	totalAmount: number | null;
}
