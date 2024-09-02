import { close, credit } from "@assets/icons";
import { ComponentProps, FormEvent, useState } from "react";

import { api } from "@/services/api";
import CurrencyInput from "react-currency-input-field";
import { useParams } from "react-router-dom";
import { SendButton } from "../SendButton";

interface BalanceModalProps extends ComponentProps<"dialog"> {
	isOpen?: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function BalanceModal({ isOpen, setIsOpen }: BalanceModalProps) {
	const { id: userId } = useParams();
	const [amount, setAmount] = useState(0);
	const [description, setDescription] = useState("");

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		try {
			await api.post("balances", { userId, amount, description });
			setIsOpen(false);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<dialog
			className={`${isOpen ? "block" : "hidden"} top-1/4 w-[22rem] flex flex-col gap-4 items-center z-50 bg-transparent `}
		>
			<div className="relative top-8 flex justify-center bg-green-second hover:bg-green-700 cursor-pointer size-16 rounded-full">
				<img src={isOpen ? close : credit} onClick={() => setIsOpen(false)} />
			</div>
			<div className="flex flex-col items-center w-full text-zinc-400  bg-color-menta rounded-lg h-72">
				<span className="mt-10">Adicione um saldo</span>
				<form
					onSubmit={handleSubmit}
					className="flex flex-col gap-4 mt-4 items-center justify-center"
				>
					<CurrencyInput
						className="border border-color-contorno rounded-md h-14 w-full p-2"
						defaultValue={0}
						prefix="R$ "
						placeholder="R$ 0,00"
						decimalScale={2}
						decimalsLimit={2}
						onValueChange={(_value, _name, values) => setAmount(values?.float!)}
						name="amount"
					/>
					<input
						type="text"
						className="border border-color-contorno rounded-md h-14 p-2"
						placeholder="Descrição"
						name="description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
					<SendButton type="submit" />
				</form>
			</div>
		</dialog>
	);
}
