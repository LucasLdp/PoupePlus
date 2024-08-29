import { SendButton } from "../SendButton";
import { close, credit } from "@assets/icons";
import { ComponentProps } from "react";

interface BalanceModalProps extends ComponentProps<"dialog"> {
	isOpen?: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function SettingModal({ isOpen, setIsOpen }: BalanceModalProps) {
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
				<form className="flex flex-col gap-4 mt-4 items-center justify-center">
					<label htmlFor="" className="flex flex-col gap-2">
						Nome
						<input
							type="text"
							className="border border-color-contorno rounded-md h-14 w-full p-2"
							placeholder="Digite seu nome"
						/>
					</label>
					<label htmlFor="" className="flex flex-col">
						Renda Mensal
						<input
							type="text"
							className="border border-color-contorno rounded-md h-14 p-2"
							placeholder="R$ 000.000,00"
						/>
					</label>

					<SendButton type="button" />
					<button className="text-color-red">Apagar conta</button>
					<button className="text-color-blue">Redefinir Conta</button>
				</form>
			</div>
		</dialog>
	);
}
