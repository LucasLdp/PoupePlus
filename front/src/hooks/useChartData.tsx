import { UserRequestTypes } from "@/types/user-types";
import { isSameMonth } from "date-fns";
import { useEffect, useState } from "react";

export function useChartData(user: UserRequestTypes) {
	const [maxBalance, setMaxBalance] = useState(0);
	const [maxExpense, setMaxExpense] = useState(0);
	const currentMonth = new Date();

	useEffect(() => {
		if (!user) return;

		const balanceData =
			user.balances
				?.filter((bal) => isSameMonth(new Date(bal.createdAt), currentMonth))
				?.map((bal) => bal.amount) || [];

		const expenseData =
			user.expenses
				?.filter((exp) => isSameMonth(new Date(exp.createdAt), currentMonth))
				?.map((exp) => exp.amount) || [];

		setMaxBalance(Math.max(...balanceData, 0));
		setMaxExpense(Math.max(...expenseData, 0));
	}, [user, currentMonth]);

	return { maxBalance, maxExpense };
}
