import { chart, credit, settings } from "@assets/icons";
import { AcessButton } from "./AcessButton";

interface QuickAccessProps {
	openModalHandler: (modalId: string) => void;
}

export function QuickAccess({ openModalHandler }: QuickAccessProps) {
	return (
		<article className="w-full border border-color-contorno rounded-lg p-6">
			<span className="text-zinc-400">Acesso Rápido</span>
			<div className="flex mt-6 justify-between gap-2">
				<AcessButton
					color="bg-green-main"
					id="balance"
					icon={credit}
					showModalFuntion={() => openModalHandler("balance")}
				/>
				<AcessButton
					color="bg-color-red"
					id="expenses"
					icon={credit}
					showModalFuntion={() => openModalHandler("expenses")}
				/>
				<AcessButton
					color="bg-color-blue"
					id="settings"
					icon={settings}
					showModalFuntion={() => openModalHandler("settings")}
				/>
				<AcessButton
					color="bg-color-blue"
					id="chart"
					icon={chart}
					showModalFuntion={() => openModalHandler("chart")}
				/>
			</div>
		</article>
	);
}
