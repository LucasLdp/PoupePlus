interface ItemListProps {
	product: string;
	price: string;
}

export function ItemList({ product, price }: ItemListProps) {
	return (
		<div className="flex justify-between text-zinc-500 max-sm:text-xs">
			<div className="flex gap-6">
				<span className="text-color-blue">&#9679;</span>
				<span> {product}</span>
			</div>
			<span>R$ {price}</span>
		</div>
	);
}
