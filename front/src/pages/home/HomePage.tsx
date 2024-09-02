import { api } from "@/services/api";
import { UserRequestTypes } from "@/types/user-types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header, ModalManager, QuickAccess, UserInfo } from "./components";
import { ExpensesList } from "./components/dashboard/ExpensesList";
import { FinanceViewer } from "./components/dashboard/FinanceViewer";
import { Footer } from "./components/layout/Footer";

export function HomePage() {
	const { id } = useParams<string>();
	const [openModal, setOpenModal] = useState<string | null>(null);
	const [user, setUser] = useState<UserRequestTypes>({} as UserRequestTypes);
	const [shouldRefetch, setShouldRefetch] = useState(false);
	const [isChart, setIsChart] = useState(false);

	const fetchUser = async () => {
		const { data } = await api.get(`/users/${id}`);
		setUser(data);
	};

	useEffect(() => {
		fetchUser();
	}, [id, shouldRefetch]);

	const openModalHandler = (modalId: string) => {
		setOpenModal(modalId);
	};

	const closeModalHandler = () => {
		setOpenModal(null);
		setShouldRefetch(!shouldRefetch);
	};

	return (
		<>
			<ModalManager
				closeModalHandler={closeModalHandler}
				openModal={openModal}
			/>

			<div
				className={`flex flex-col h-screen ${openModal ? "bg-color-light-green-focus" : "bg-transparent"}`}
			>
				<Header />

				<main className="flex-1 flex flex-col md:mr-[15%] md:ml-[15%] max-sm:ml-[5%] max-sm:mr-[5%]">
					<UserInfo user={user} />
					<div className="md:grid md:grid-cols-[1fr_2fr] sm:flex mt-8 gap-10">
						{/* 1º Coluna da grid */}
						<div className="flex flex-col justify-around gap-8">
							<QuickAccess openModalHandler={openModalHandler} />
							<ExpensesList expenses={user.expenses} />
						</div>

						{/* 2º Coluna da grid */}
						<FinanceViewer
							isChart={isChart}
							setIsChart={setIsChart}
							user={user}
						/>
					</div>
				</main>

				<Footer />
			</div>
		</>
	);
}
