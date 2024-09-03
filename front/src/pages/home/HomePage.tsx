import { useChartData } from "@/hooks/useChartData";
import { api } from "@/services/api";
import { UserRequestTypes } from "@/types/user-request";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FinanceActions, Header, ModalManager, UserInfo } from "./components";
import { LoadingScreen } from "./components/LoadingScreen";
import { ExpensesList } from "./components/dashboard/ExpensesList";
import { FinanceViewer } from "./components/dashboard/FinanceViewer";
import { Footer } from "./components/layout/Footer";

export function HomePage() {
	const { id } = useParams<string>();
	const [user, setUser] = useState<UserRequestTypes | null>(null); 
	const [isLoading, setIsLoading] = useState(true);
	const [openModal, setOpenModal] = useState<string | null>(null);
	const {maxBalance, maxExpense} = useChartData(user!);

	const fetchUser = async () => {
		try {
			const response = await api.get(`/users/${id}`);
			setUser(response.data);
		} catch (error) {
			console.error("Erro ao buscar o usuário:", error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchUser();
	}, [id, openModal]);

	return isLoading ? (
		<LoadingScreen />
	) : (
		<>
			<ModalManager
				closeModalHandler={() => setOpenModal(null)}
				openModal={openModal}
				user={user!}
			/>

			<div
				className={`flex flex-col h-screen ${openModal ? "bg-color-light-green-focus" : "bg-transparent"}`}
			>
				<Header />

				<main className="flex-1 flex flex-col md:mr-[15%] md:ml-[15%] max-sm:ml-[5%] max-sm:mr-[5%]">
					<UserInfo
						maxBalance={maxBalance}
						maxExpense={maxExpense}
						user={user!}
					/>
					<div className="md:grid md:grid-cols-[1fr_2fr] sm:flex mt-8 gap-10">
						<div className="flex flex-col justify-around gap-8">
							<FinanceActions openModalHandler={setOpenModal} />
							<ExpensesList expenses={user!.expenses} />
						</div>
						<FinanceViewer user={user!} />
					</div>
				</main>

				<Footer />
			</div>
		</>
	);
}