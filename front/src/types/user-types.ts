import { Balance } from "./balance-types";
import { Expense } from "./expenses-types";

export interface User {
	id?: string;
	name?: string;
	balances?: Balance;
	expenses?: Expense;
}
