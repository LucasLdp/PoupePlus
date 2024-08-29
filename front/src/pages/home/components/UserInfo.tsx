import { User } from "#types/user-types";
import { profile } from "@assets/icons";

export function UserInfo({ name, balances, expenses }: User) {
	return (
		<div className="mt-8 rounded-lg shadow-lg border border-color-contorno p-4 flex flex-col sm:grid sm:grid-cols-3 gap-4 sm:gap-0">
			{/* Saudações e Nome */}
			<div className="flex justify-between sm:justify-start items-center sm:gap-4 sm:self-center sm:ml-16">
				<div className="flex items-center gap-2">
					<img
						src={profile}
						alt="Profile"
						className="w-8 h-8 sm:w-auto sm:h-auto"
					/>
					<p className="flex flex-col text-zinc-500 text-sm">
						Boa Tarde
						<span className="text-lg text-green-background font-semibold">
							{name}
						</span>
					</p>
				</div>
				{/* Saldo Geral */}
				<div className="flex justify-center items-center sm:hidden whitespace-nowrap">
					<p className="flex flex-col text-right text-zinc-500 text-sm md:text-base">
						Saldo Geral
						<span className="text-xl md:text-2xl lg:text-4xl font-thin text-green-second">
							R$<span className="font-semibold"> {balances?.totalAmount}</span>
						</span>
					</p>
				</div>
			</div>

			{/* Receita Mensal */}
			<div className="flex justify-around sm:justify-center items-center gap-8 sm:gap-16 ">
				<p className="flex flex-col text-nowrap text-zinc-400 text-xs md:text-base max-sm:text-left">
					Receita Mensal
					<span className="md:text-lg text-xs text-green-main  font-semibold">
						+R$ {balances?.amount ?? "000,00"}
					</span>
				</p>
				<p className="flex flex-col text-nowrap text-zinc-400 text-xs md:text-base max-sm:text-left sm:text-left">
					Despesa Mensal
					<span className="max-sm:text-xs md:text-lg  text-color-red font-semibold">
						-R$ {expenses?.amount ?? "000,00"}
					</span>
				</p>
			</div>

			{/* Saldo Geral (Desktop) */}
			<div className="hidden sm:flex justify-center items-center whitespace-nowrap">
				<p className="flex flex-col text-right text-zinc-500 text-sm md:text-base">
					Saldo Geral
					<span className="text-xl md:text-2xl lg:text-4xl font-thin text-green-second">
						R$<span className="font-semibold"> 000,00</span>
					</span>
				</p>
			</div>
		</div>
	);
}
