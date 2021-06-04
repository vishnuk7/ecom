import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { ItemCard } from './ItemCard';
import { RootState } from '../../redux';

export const ItemsContainer = () => {
	const { items } = useSelector((state: RootState) => state.cart);

	return (
		<div>
			<AnimatePresence>
				{items.map((item) => (
					<ItemCard key={item.id} item={item} />
				))}
			</AnimatePresence>
		</div>
	);
};
