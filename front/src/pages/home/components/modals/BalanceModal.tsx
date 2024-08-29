import { close, credit } from "@assets/icons";
import { ComponentProps } from "react";

import { SendButton } from "../SendButton";

interface BalanceModalProps extends ComponentProps<"dialog"> {
	isOpen?: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function BalanceModal({ isOpen, setIsOpen }: BalanceModalProps) {
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
