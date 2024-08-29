import {
	BalanceModal,
	ChartModal,
	ExpensesModal,
	SettingModal,
} from "./modals";

interface ModalManagerProps {
	openModal: string | null;
	closeModalHandler: () => void;
}

export function ModalManager({
	openModal,
	closeModalHandler,
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
				<SettingModal isOpen={true} setIsOpen={closeModalHandler} />
			)}
			{openModal === "chart" && (
				<ChartModal isOpen={true} setIsOpen={closeModalHandler} />
			)}
		</>
	);
}
