import { UserRequestTypes } from "@/types/user-request";
import { useState } from "react";
import { FinanceChart } from "./FinanceChart";
import { FinanceTable } from "./FinanceTable";

interface FinanceViewerProps {
	user: UserRequestTypes;
}

export function FinanceViewer({ user }: FinanceViewerProps) {
	const [isChart, setIsChart] = useState(false);

	return (
		<article className="w-full h-full border flex flex-col gap-5 max-sm:text-xs border-color-contorno rounded-lg p-4 max-sm:mt-8">
			<select
				onChange={() => setIsChart(!isChart)}
				className="bg-zinc-100 border-none text-green-background cursor-pointer rounded-lg p-2"
			>
				<option selected>Tabela de categorias</option>
				<option>Gráfico de dados</option>
			</select>

			{/* Passar as transações diretamente para a tabela */}
			{isChart ? <FinanceChart user={user} /> : <FinanceTable user={user} />}
		</article>
	);
}
