import { api } from "@/services/api";
import { close, credit } from "@assets/icons";
import { ChangeEvent, FormEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { SendButton } from "../SendButton";

interface BalanceModalProps {
	isOpen?: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function SettingModal({ isOpen, setIsOpen }: BalanceModalProps) {
	const [formData, setFormData] = useState({
		name: "",
		totalAmount: "",
	});
	const { id } = useParams();

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		try {
			await api.put(`users/${id}`, formData);
			setIsOpen(false);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<dialog
			className={`${isOpen ? "block" : "hidden"} top-[15%] w-96 flex flex-col gap-4 items-center z-50 bg-transparent `}
		>
			<div
				className="relative top-8 flex justify-center bg-color-blue size-16 cursor-pointer hover:bg-blue-400 rounded-full"
				onClick={() => setIsOpen(false)}
			>
				<img src={isOpen ? close : credit} />
			</div>
			<div className="flex flex-col items-center w-full text-zinc-400  bg-color-menta rounded-lg h-full p-4">
				<span className="mt-10">Configure sua conta</span>
				<form
					onSubmit={handleSubmit}
					className="flex flex-col gap-4 mt-4 items-center justify-center"
				>
					<label htmlFor="" className="flex flex-col gap-2">
						Nome
						<input
							type="text"
							name="name"
							className="border border-color-contorno rounded-md h-14 w-full p-2"
							placeholder="Digite seu nome"
							value={formData.name}
							onChange={handleInputChange}
						/>
					</label>
					<label htmlFor="" className="flex flex-col">
						Renda Mensal
						<input
							type="text"
							name="totalAmount"
							className="border border-color-contorno rounded-md h-14 p-2"
							placeholder="R$ 000.000,00"
							value={formData.totalAmount}
							onChange={handleInputChange}
						/>
					</label>

					<SendButton type="submit" />
					<button className="text-color-red">Apagar conta</button>
					<button className="text-color-blue">Redefinir Conta</button>
				</form>
			</div>
		</dialog>
	);
}
