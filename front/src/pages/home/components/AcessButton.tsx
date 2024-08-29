import { ComponentProps } from "react";

interface AcessButtonProps extends ComponentProps<"button"> {
	icon: string;
	color: string;
	showModalFuntion?: React.Dispatch<React.SetStateAction<boolean>>;
}

export function AcessButton({
	icon,
	color,
	showModalFuntion,
}: AcessButtonProps) {
	return (
		<button
			onClick={() => showModalFuntion!(true)}
			className={`flex justify-center size-16 max-sm:size-12 items-center ${color} rounded-full`}
		>
			<img src={icon} />
		</button>
	);
}
