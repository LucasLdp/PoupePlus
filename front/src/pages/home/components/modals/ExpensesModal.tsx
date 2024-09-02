import { api } from "@/services/api";
import { close, credit } from "@assets/icons";
import { ChangeEvent, ComponentProps, FormEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { SendButton } from "../SendButton";

interface BalanceModalProps extends ComponentProps<"dialog"> {
	isOpen?: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ExpensesModal({ isOpen, setIsOpen }: BalanceModalProps) {
	const { id } = useParams();
	const [formData, setFormData] = useState({
		description: "",
		amount: "",
	});

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		try {
			await api.post("expenses", { userId: id, ...formData });
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
					<input
						type="text"
						className="border border-color-contorno rounded-md h-14 w-full p-2"
						placeholder="R$"
						value={formData.amount || ""}
						onChange={handleInputChange}
						name="amount"
					/>
					<input
						type="text"
						className="border border-color-contorno rounded-md h-14 p-2"
						placeholder="Descrição"
						value={formData.description || ""}
						onChange={handleInputChange}
						name="description"
					/>
					<SendButton type="submit" />
				</form>
			</div>
		</dialog>
	);
}
