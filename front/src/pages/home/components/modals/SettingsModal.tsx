import { api } from "@/services/api";
import { UserRequestTypes } from "@/types/user-request";
import { close, credit } from "@assets/icons";
import { useState } from "react";
import CurrencyInput from "react-currency-input-field";
import { useNavigate, useParams } from "react-router-dom";
import { SendButton } from "../SendButton";

interface BalanceModalProps {
	isOpen?: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	user: UserRequestTypes;
}

export function SettingModal({ isOpen, setIsOpen, user }: BalanceModalProps) {
	const [name, setName] = useState(user.name);
	const [totalAmount, setTotalAmount] = useState(user.totalAmount);
	const navigate = useNavigate();
	const { id } = useParams();

	const handleSetInformation = async () => {
		try {
			await api.put(`/users/${id}`, { name, totalAmount });
			setIsOpen(false);
		} catch (error) {
			console.log(error);
		}
	};

	const handleDeleteAccount = async () => {
		try {
			await api.delete(`/users/${id}`);
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	const handleReset = async () => {
		try {
			await api.post(`/users/reset/${id}`);
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
					onSubmit={handleSetInformation}
					className="flex flex-col gap-4 mt-4 items-center justify-center"
				>
					<label htmlFor="" className="flex flex-col gap-2">
						Nome
						<input
							type="text"
							name="name"
							className="border border-color-contorno rounded-md h-14 w-full p-2"
							placeholder="Digite seu nome"
							onChange={(e) => setName(e.target.value)}
						/>
					</label>
					<label htmlFor="" className="flex flex-col">
						Renda Mensal
						<CurrencyInput
							className="border border-color-contorno rounded-md h-14 w-full p-2"
							prefix="R$ "
							decimalScale={2}
							placeholder="Digite sua renda"
							decimalsLimit={2}
							onValueChange={(_value, _name, values) =>
								setTotalAmount(values?.float!)
							}
							name="amount"
						/>
					</label>

					<SendButton type="submit" />
					<button onClick={handleDeleteAccount} className="text-color-red">
						Apagar conta
					</button>
					<button onClick={handleReset} className="text-color-blue">
						Redefinir Conta
					</button>
				</form>
			</div>
		</dialog>
	);
}
