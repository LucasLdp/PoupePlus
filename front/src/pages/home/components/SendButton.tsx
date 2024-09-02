import { send } from "@assets/icons";
import { ComponentProps } from "react";

interface SendButtonProps extends ComponentProps<"button"> {}

export function SendButton({ ...props }: SendButtonProps) {
	return (
		<button
			className="flex items-center justify-around outline hover:bg-green-700 bg-green-second text-white gap-2 nd rounded-lg w-40 p-3 "
			{...props}
		>
			Confirmar
			<img src={send} />
		</button>
	);
}
