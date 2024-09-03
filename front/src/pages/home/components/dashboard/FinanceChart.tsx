import { useChartData } from "@/hooks/useChartData";
import { UserRequestTypes } from "@/types/user-request";
import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

interface FinanceChartProps {
	user: UserRequestTypes;
}

export function FinanceChart({ user }: FinanceChartProps) {
	const { maxBalance, maxExpense } = useChartData(user);

	const options: ApexOptions = {
		chart: {
			id: "balance-expense-pie-chart",
			type: "pie",
		},
		labels: ["Maior saldo mensal", "Maior despesa mensal"],
		colors: ["#49c668", "#ec8a94"],
	};

	const series = [maxBalance, maxExpense];

	return (
		<>
			{maxBalance === 0 && maxExpense === 0 ? (
				<div className="w-full h-full flex justify-center items-center text-3xl text-color-blue">
					Nenhum saldo ou despesa encontrado
				</div>
			) : (
				<Chart
					options={options}
					series={series}
					type="pie"
					width="100%"
					height="100%"
				/>
			)}
		</>
	);
}
