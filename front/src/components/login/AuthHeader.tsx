import Logo from "@assets/poupe_dark.svg";

interface AuthHeaderProps {
	isRegister: boolean;
}

export function AuthHeader({ isRegister }: AuthHeaderProps) {
	return (
		<div className="w-1/2 max-sm:w-full flex justify-center">
			<article className="bg-white max-sm:shadow-2xl max-sm:mr-5 max-sm:ml-5 h-auto flex flex-col items-center p-8 gap-8 justify-center size-[26rem] rounded-xl md:place-self-center">
				<img src={Logo} alt="Logo" className="w-24 h-auto" />
				<h2 className="text-3xl text-[#858585] font-bold text-center">
					Faça seu {isRegister ? "cadastro" : "login"}
				</h2>
			</article>
		</div>
	);
}
