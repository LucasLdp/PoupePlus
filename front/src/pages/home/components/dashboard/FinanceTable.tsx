import { api } from "@/services/api";
import { UserRequestTypes } from "@/types/user-request";
import { Trash } from "lucide-react";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useEffect, useState } from "react";

interface FinanceTableProps {
	user: UserRequestTypes | null;
}

export function FinanceTable({ user }: FinanceTableProps) {
	const [transactions, setTransactions] = useState<any[]>([]);

	// Atualiza as transações quando o user muda
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

	const handleDelete = async (id: string, category: string) => {
		try {
			const endpoint =
				category === "balance" ? `balances/${id}` : `expenses/${id}`;
			await api.delete(endpoint);

			// Filtra a transação deletada da lista de transações
			const updatedTransactions = transactions.filter(
				(transaction) => transaction.id !== id,
			);
			setTransactions(updatedTransactions);
		} catch (error) {
			console.error("Erro ao deletar transação:", error);
		}
	};

	const actionBodyTemplate = (rowData: any) => {
		return (
			<button
				className="flex justify-center items-center size-10 border rounded-full border-red-500"
				onClick={() => handleDelete(rowData.id, rowData.category)}
			>
				<Trash className="text-red-300" />
			</button>
		);
	};

	return (
		<div className="overflow-x-auto">
			<DataTable value={transactions}>
				<Column
					field="description"
					className="text-center"
					header="Descrição"
				></Column>
				<Column field="type" header="Tipo"></Column>
				<Column field="amount" header="Montante" sortable></Column>
				<Column
					field="createdAt"
					header="Data"
					body={(rowData) => new Date(rowData.createdAt).toLocaleDateString()}
				></Column>
				<Column body={actionBodyTemplate} header="Ações"></Column>
			</DataTable>
		</div>
	);
}
