import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';

interface Transaction {
	id: string;
	description: string;
	amount: number;
	type: string;
	createdAt: Date;
}

interface FinanceTableProps {
	transactions: Transaction[];
}

export function FinanceTable({ transactions }: FinanceTableProps) {
	return (
		<div className='overflow-x-auto'>
			<DataTable value={transactions}>
				<Column field="description" header="Descrição"></Column>
				<Column field="type" header="Tipo"></Column>
				<Column field="amount" header="Montante" sortable></Column>
				<Column field="createdAt" header="Data" body={(rowData) => new Date(rowData.createdAt).toLocaleDateString()}></Column>
			</DataTable>
		</div>
	);
}
