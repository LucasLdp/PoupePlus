import { api } from "@/services/api";
import { close, credit } from "@assets/icons";
import { ComponentProps, FormEvent, useState } from "react";
import CurrencyInput from "react-currency-input-field";
import { useParams } from "react-router-dom";
import { SendButton } from "../SendButton";

interface BalanceModalProps extends ComponentProps<"dialog"> {
	isOpen?: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ExpensesModal({ isOpen, setIsOpen }: BalanceModalProps) {
	const { id: userId } = useParams();
	const [amount, setAmount] = useState(0);
	const [description, setDescription] = useState("");

	const handleSubmit = async (e: FormEvent) => {
	try {
			await api.post("expenses", { userId, amount, description });
			setIsOpen(false);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<dialog
			className={`${isOpen ? "block" : "hidden"} top-[20%] w-96 flex flex-col gap-4 items-center z-50 bg-transparent `}
		>
			<div
				className="relative top-8 flex cursor-pointer justify-center bg-color-red hover:bg-red-400 size-16 rounded-full"
				onClick={() => setIsOpen(false)}
			>
				<img src={isOpen ? close : credit} />
			</div>
			<div className="flex flex-col items-center text-zinc-400  w-full bg-color-menta rounded-lg h-auto p-4">
				<span className="mt-10">Adicione uma despesa</span>
				<form
					action=""
					onSubmit={handleSubmit}
					className="flex flex-col gap-4 mt-4 items-center justify-center"
				>
					<CurrencyInput
						className="border border-color-contorno rounded-md h-14 w-full p-2"
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
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						name="description"
					/>
					<SendButton type="submit" />
				</form>
			</div>
		</dialog>
	);
}
