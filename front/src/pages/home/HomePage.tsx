import { AuthContext } from "@/context/auth/AuthContext";
import { useChartData } from "@/hooks/useChartData";
import { api } from "@/services/api";
import { UserRequestTypes } from "@/types/user-types";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header, ModalManager, QuickAccess, UserInfo } from "./components";
import { ExpensesList } from "./components/dashboard/ExpensesList";
import { FinanceChart } from "./components/dashboard/FinanceChart";
import { FinanceTable } from "./components/dashboard/FinanceTable";
import { Footer } from "./components/layout/Footer";

export function HomePage() {
	const { id } = useParams<string>();
	const [openModal, setOpenModal] = useState<string | null>(null);
	const [user, setUser] = useState<UserRequestTypes>({} as UserRequestTypes);
	const [shouldRefetch, setShouldRefetch] = useState(false);
	const [isChart, setIsChart] = useState(false);
	const {maxBalance, maxExpense} = useChartData(user);
	


	useEffect(() => {
		fetchUser();
	}, [id, shouldRefetch]);
	
	const fetchUser = async () => {
		const { data } = await api.get(`/users/${id}`);
		setUser(data);
	};

	const openModalHandler = (modalId: string) => {
		setOpenModal(modalId);
	};

	const closeModalHandler = () => {
		setOpenModal(null);
		setShouldRefetch(!shouldRefetch);
	};

	const transactions = [
		...user.balances?.map(balance => ({
			id: balance.id,
			description: balance.description,
			amount: balance.amount,
			type: 'Receita',
			createdAt: balance.createdAt,
		})) || [],
		...user.expenses?.map(expense => ({
			id: expense.id,
			description: expense.description,
			amount: expense.amount,
			type: 'Despesa',
			createdAt: expense.createdAt,
		})) || [],
	];

	return (
		<>
			<ModalManager closeModalHandler={closeModalHandler} openModal={openModal} />

			<div
				className={`flex flex-col h-screen ${openModal ? "bg-color-light-green-focus" : "bg-transparent"}`}
			>
				<Header />

				<main className="flex-1 flex flex-col md:mr-[15%] md:ml-[15%] max-sm:ml-[5%] max-sm:mr-[5%]">
					<UserInfo maxBalance={maxBalance} maxExpense={maxExpense} user={user} />
					<div className="md:grid md:grid-cols-[1fr_2fr] sm:flex mt-8 gap-10">
						{/* 1º Coluna da grid */}
						<div className="flex flex-col justify-around gap-8">
							<QuickAccess openModalHandler={openModalHandler} />
							<ExpensesList expenses={user.expenses} />
						</div>
						<article className="w-full h-full border flex flex-col gap-5 max-sm:text-xs border-color-contorno rounded-lg p-4 max-sm:mt-8">
							<select
								onChange={() => setIsChart(!isChart)}
								className="bg-zinc-100 border-none text-green-background cursor-pointer rounded-lg p-2"
							>
								<option selected>Tabela de categorias</option>
								<option>Gráfico de dados</option>
							</select>

							{/* Passar as transações diretamente para a tabela */}
							{isChart ?
								<FinanceChart maxBalance={maxBalance} maxExpense={maxExpense} /> 
							 : 
								<FinanceTable transactions={transactions}/>
							}
						</article>
					</div>
				</main>

				<Footer />
			</div>
		</>
	);
}
