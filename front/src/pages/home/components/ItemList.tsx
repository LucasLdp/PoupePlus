interface ItemListProps {
	product: string;
	amount: number;
}

export function ItemList({ product, amount }: ItemListProps) {
	return (
		<div className="flex justify-between text-zinc-500 max-sm:text-xs">
			<div className="flex gap-6">
				<span className="text-color-blue">&#9679;</span>
				<span> {product}</span>
			</div>
			<span>R$ {amount}</span>
		</div>
	);
}
