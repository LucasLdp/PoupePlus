import { useState } from "react";
import { User } from "types/user-types";
import {
	CategoryInfo,
	Header,
	ItemList,
	ModalManager,
	QuickAccess,
	UserInfo,
} from "./components/";

export function HomePage() {
	const [openModal, setOpenModal] = useState<string | null>(null);
	const [user, setUser] = useState<User | null>(null);

	const openModalHandler = (modalId: string) => {
		setOpenModal(modalId);
	};

	const closeModalHandler = () => {
		setOpenModal(null);
	};

	return (
		<>
			<ModalManager
				closeModalHandler={closeModalHandler}
				openModal={openModal}
			/>

			<div
				className={`flex flex-col min-h-screen ${openModal ? "bg-color-light-green-focus" : "bg-transparent"}`}
			>
				<Header />

				<main className="flex-1 flex flex-col md:mr-[15%] md:ml-[15%] max-sm:ml-[5%] max-sm:mr-[5%]">
					<UserInfo name={user?.name} />
					<div className="md:grid md:grid-cols-[1fr_2fr] sm:flex mt-8 gap-10">
						<div className="flex flex-col justify-around gap-8">
							<QuickAccess openModalHandler={openModalHandler} />

							<article className="w-full border border-color-contorno rounded-lg p-6">
								<span className="text-zinc-400 text-base max-sm:text-xs">
									Maiores gastos do mês
								</span>
								<div className="flex flex-col mt-4 gap-2 w-auto">
									{Array.from({ length: 7 }).map((_, index) => (
										<ItemList
											key={index}
											product="Livro de cálculo"
											price={Math.floor(Math.random() * 1000).toFixed(2)}
										/>
									))}
								</div>
							</article>
						</div>

						<article className="w-full h-full border text-zinc-400 max-sm:text-xs border-color-contorno rounded-lg p-4 max-sm:mt-8">
							<span>Categoria de gastos</span>
							<div className="flex flex-col gap-4 mt-2">
								{Array.from({ length: 3 }).map((_, index) => (
									<CategoryInfo title="Teste" isCategory key={index} />
								))}
								<CategoryInfo title="Cadastre uma nova categoria" />
							</div>
						</article>
					</div>
				</main>

				<footer className="bg-green-background py-[2px] mt-6 text-center text-white">
					<p className="text-xs">UX DESIGN • SECS 2024</p>
				</footer>
			</div>
		</>
	);
}
