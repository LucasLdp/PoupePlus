import { UserRequestTypes } from "@/types/user-request";
import {
	BalanceModal,
	ChartModal,
	ExpensesModal,
	SettingModal,
} from "./modals";

interface ModalManagerProps {
	openModal: string | null;
	closeModalHandler: () => void;
	user: UserRequestTypes;
}

export function ModalManager({
	openModal,
	closeModalHandler,
	user,
}: ModalManagerProps) {
	return (
		<>
			{openModal === "balance" && (
				<BalanceModal isOpen={true} setIsOpen={closeModalHandler} />
			)}
			{openModal === "expenses" && (
				<ExpensesModal isOpen={true} setIsOpen={closeModalHandler} />
			)}
			{openModal === "settings" && (
				<SettingModal user={user} isOpen={true} setIsOpen={closeModalHandler} />
			)}
			{openModal === "chart" && (
				<ChartModal isOpen={true} setIsOpen={closeModalHandler} />
			)}
		</>
	);
}
