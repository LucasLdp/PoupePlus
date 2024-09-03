import { UserRequestTypes } from "@/types/user-request";
import { close, credit } from "@assets/icons";
import { ComponentProps, useEffect, useState } from "react";

interface BalanceModalProps extends ComponentProps<"dialog"> {
	isOpen?: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	user: UserRequestTypes;
}

export function ChartModal({ isOpen, setIsOpen, user }: BalanceModalProps) {
	const [transactions, setTransactions] = useState<any[]>([]);

	useEffect(() => {
		if (user) {
			const updatedTransactions = [
				...(user.balances || []).map((balance) => ({
					id: balance.id,
					description: balance.description,
					amount: balance.amount,
					type: "Receita",
					createdAt: balance.createdAt,
					category: "balance", // Adicionando a categoria
				})),
				...(user.expenses || []).map((expense) => ({
					id: expense.id,
					description: expense.description,
					amount: expense.amount,
					type: "Despesa",
					createdAt: expense.createdAt,
					category: "expense", // Adicionando a categoria
				})),
			];
			setTransactions(updatedTransactions);
		}
	}, [user]);

	return (
		<dialog
			className={`${isOpen ? "block" : "hidden"} top-1/4 w-96 flex flex-col gap-4 items-center z-50 bg-transparent `}
		>
			<div
				className="relative top-8 flex justify-center bg-color-blue size-16 cursor-pointer hover:bg-blue-400 rounded-full"
				onClick={() => setIsOpen(false)}
			>
				<img src={isOpen ? close : credit} />
			</div>
			<div className="flex flex-col items-center text-zinc-400  w-full bg-color-menta rounded-lg h-72">
				<span className="mt-10 text-xl text-green-background">
					Extrato da conta
				</span>
				<div className="flex flex-col p-8 w-full justify-between">
					{transactions.map((transaction) => (
						<li
							key={transaction.id}
							className="flex justify-between  items-center  h-12 border-b border-color-light-green"
						>
							<p className="flex gap-6">
								<span
									className={
										transaction.type === "Receita"
											? "text-green-background"
											: "text-red-background"
									}
								>
									&#9679;
								</span>
								<span>{transaction.description}</span>
							</p>
							<span>R$ {Number(transaction.amount).toFixed(2)}</span>
						</li>
					))}
				</div>
			</div>
		</dialog>
	);
}
