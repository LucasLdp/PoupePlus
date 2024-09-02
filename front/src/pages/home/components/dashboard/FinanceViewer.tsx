import { UserRequestTypes } from "@/types/user-types";
import { FinanceChart } from "./FinanceChart";
import { FinanceTable } from "./FinanceTable";

interface FinanceViewerProps {
	isChart: boolean;
	setIsChart: React.Dispatch<React.SetStateAction<boolean>>;
	user: UserRequestTypes;
}

export function FinanceViewer({
	isChart,
	setIsChart,
	user,
}: FinanceViewerProps) {
	return (
		<article className="w-full h-full border flex flex-col gap-5 max-sm:text-xs border-color-contorno rounded-lg p-4 max-sm:mt-8">
			<select
				onChange={() => setIsChart(!isChart)}
				className="bg-zinc-100 border-none text-green-background cursor-pointer rounded-lg p-2"
			>
				<option selected>Tabela de categorias</option>
				<option>Gráfico de dados</option>
			</select>

			{isChart ? <FinanceChart user={user} /> : <FinanceTable />}
		</article>
	);
}
