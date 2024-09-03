import { useChartData } from "@/hooks/useChartData";
import { useFetchUser } from "@/hooks/useFetchUser";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FinanceActions, Header, ModalManager, UserInfo } from "./components";
import { LoadingScreen } from "./components/LoadingScreen";
import { ExpensesList } from "./components/dashboard/ExpensesList";
import { FinanceViewer } from "./components/dashboard/FinanceViewer";
import { Footer } from "./components/layout/Footer";

export function HomePage() {
	const { id } = useParams<string>();
	const navigate = useNavigate(); // Importa o hook useNavigate
	const [shouldRefetch, setShouldRefetch] = useState(false);
	const { user, isLoading } = useFetchUser(id!);
	const { maxBalance, maxExpense } = useChartData(user!);
	const [openModal, setOpenModal] = useState<string | null>(null);

	useEffect(() => {
		if (shouldRefetch) {
			setShouldRefetch(false);
		}
	}, [user]);

	useEffect(() => {
		if (!user) {
			navigate("*");
		}
	}, [isLoading, user, navigate]);

	return isLoading ? (
		<LoadingScreen />
	) : (
		<>
			<ModalManager
				closeModalHandler={() => {
					setOpenModal(null);
					setShouldRefetch(true);
				}}
				openModal={openModal}
				user={user}
			/>

			<div
				className={`flex flex-col h-screen ${openModal ? "bg-color-light-green-focus" : "bg-transparent"}`}
			>
				<Header />

				<main className="flex-1 flex flex-col md:mr-[15%] md:ml-[15%] max-sm:ml-[5%] max-sm:mr-[5%]">
					<UserInfo
						maxBalance={maxBalance}
						maxExpense={maxExpense}
						user={user}
					/>
					<div className="md:grid md:grid-cols-[1fr_2fr] sm:flex mt-8 gap-10">
						<div className="flex flex-col justify-around gap-8">
							<FinanceActions openModalHandler={setOpenModal} />
							<ExpensesList expenses={user.expenses} />
						</div>
						<FinanceViewer user={user} />
					</div>
				</main>

				<Footer />
			</div>
		</>
	);
}
