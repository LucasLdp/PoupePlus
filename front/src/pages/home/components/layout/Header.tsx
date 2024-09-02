import { logout } from "@assets/icons";
import poupe_white from "@assets/poupe_white.svg";
import uxLogo from "@assets/uxlogo.svg";

export function Header() {
	return (
		<header className="flex flex-row justify-between items-center bg-green-second p-2 max-sm:justify-around">
			<img
				src={uxLogo}
				alt="UX Logo"
				className="md:size-16 md:ml-24 w-16 ssm:mb-0 max-sm:size-10"
			/>
			<img
				src={poupe_white}
				alt="Poupe Logo"
				className="md:w-32 max-sm:w-18 sm:h-auto"
			/>
			<div className="flex items-center justify-center md:size-12 max-sm:size-8 bg-green-main rounded-full text-2xl md:mr-24 sm:mt-0 cursor-pointer">
				<img src={logout} alt="Logout" className="size-8 max-sm:size-6" />
			</div>
		</header>
	);
}
