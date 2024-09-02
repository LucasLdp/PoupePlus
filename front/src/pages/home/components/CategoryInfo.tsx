import { ComponentProps } from "react";

interface CategoryInfoProps extends ComponentProps<"div"> {
	title: string;
	isCategory?: boolean;
}

export function CategoryInfo({ title, isCategory }: CategoryInfoProps) {
	return (
		<div
			className={`flex items-center gap-2 w-full h-24 max-sm:h-14 rounded-lg  ${isCategory ? "bg-color-light-green" : "bg-color-light-blue"}`}
		>
			<span
				className={`text-color-blue md:ml-4 ${isCategory ? "text-green-main" : "text-color-blue"} text-5xl`}
			>
				&#9679;
			</span>
			<span
				className={`text-xl mt-1 max-sm:text-xs text-nowrap ${isCategory ? "text-green-background" : "text-color-blue"}`}
			>
				{title}
			</span>
		</div>
	);
}
