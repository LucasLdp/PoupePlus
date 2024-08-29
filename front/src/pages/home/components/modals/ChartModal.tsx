import { close, credit } from "@assets/icons";
import { ComponentProps } from "react";
import { SendButton } from "../SendButton";

interface BalanceModalProps extends ComponentProps<"dialog"> {
	isOpen?: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ChartModal({ isOpen, setIsOpen }: BalanceModalProps) {
	return (
		<dialog
			className={`${isOpen ? "block" : "hidden"} top-1/4 w-96 flex flex-col gap-4 items-center z-50 bg-transparent `}
		>
			<div
				className="relative top-8 flex justify-center bg-color-blue size-16 cursor-pointer hover:bg-blue-400 rounded-full"
				onClick={() => setIsOpen(false)}
			>
				<img src={isOpen ? close : credit} />
			</div>
			<div className="flex flex-col items-center text-zinc-400  w-full bg-color-menta rounded-lg h-72">
				<span className="mt-10">Adicione um saldo</span>
				<form
					action=""
					className="flex flex-col gap-4 mt-4 items-center justify-center"
				>
					<input
						type="text"
						className="border border-color-contorno rounded-md h-14 w-full p-2"
						placeholder="R$"
					/>
					<input
						type="text"
						className="border border-color-contorno rounded-md h-14 p-2"
						placeholder="Descrição"
					/>
					<SendButton type="button" />
				</form>
			</div>
		</dialog>
	);
}
