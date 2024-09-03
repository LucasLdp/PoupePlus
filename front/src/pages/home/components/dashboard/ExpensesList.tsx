import { UserRequestTypes } from "@/types/user-request";
import { ItemList } from "../ItemList";

interface ExpensesListProps {
	expenses: UserRequestTypes["expenses"];
}

export function ExpensesList({ expenses }: ExpensesListProps) {
	return (
		<article className="h-full w-full border border-color-contorno rounded-lg p-6">
			<span className="text-zinc-400 text-base max-sm:text-xs">
				Maiores gastos do mês
			</span>
			<div className="flex flex-col mt-4 gap-2 w-auto max-h-60 overflow-y-auto custom-scrollbar pr-3">
				{expenses
					?.sort((a, b) => b.amount - a.amount)
					.map((expense) => (
						<ItemList
							key={expense.id}
							product={expense.description}
							amount={expense.amount}
						/>
					))}
			</div>
		</article>
	);
}
