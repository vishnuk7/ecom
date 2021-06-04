import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { addToCart, decreaseQuantity, removeItem } from '../../redux/cart';

interface ItemCartProps {
	item: {
		id: number;
		name: string;
		imageUrl: string;
		price: number;
		quantity?: number;
	};
}

const reset = {
	scale: 1,
	opacity: 1,
};

const hover = {
	scale: 1.01,
	// color: 'black',
};

export const ItemCard: React.FC<ItemCartProps> = ({ item }) => {
	const { id, name, imageUrl, price, quantity } = item;

	const dispatch = useDispatch();

	const increaseItem = () => {
		dispatch(addToCart(item));
	};

	const decreaseItem = () => {
		dispatch(decreaseQuantity(id));
	};

	const removeItemCart = () => {
		dispatch(removeItem(id));
	};

	return (
		<motion.div
			initial={{ opacity: 0, scale: 1 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 1.1 }}
			transition={{ ease: 'easeOut', duration: 0.3 }}
			className='flex justify-between p-5 bg-white rounded-md shadow-2xl mb-8 cursor-pointer'>
			<div className='flex'>
				<img className='w-2/5' src={imageUrl} alt={name} />
				<div className='pl-8 flex flex-col'>
					<p className='text-xl'>&#8377;{price * quantity!}</p>
					<p className='text-gray-500'>{name}</p>
					<div>
						<p className='text-gray-500'>
							Quantity:
							{quantity! > 1 && (
								<motion.button
									onClick={() => decreaseItem()}
									initial={reset}
									whileHover={{ ...hover, x: -2 }}
									whileTap={{ scale: 0.8 }}
									animate={reset}
									transition={{
										ease: 'easeInOut',
									}}
									exit={{ opacity: 0 }}
									className='inline-block cursor-pointer'>
									<FiChevronLeft className='inline-block' size={20} />
								</motion.button>
							)}
							<span className='px-2'>{quantity}</span>
							<motion.button
								onClick={() => increaseItem()}
								initial={reset}
								whileHover={{ ...hover, x: 2 }}
								whileTap={{ scale: 0.8 }}
								animate={reset}
								className='inline-block cursor-pointer'>
								<FiChevronRight className='inline-block' size={20} />
							</motion.button>
						</p>
					</div>
				</div>
			</div>
			<div>
				<motion.button
					onClick={() => removeItemCart()}
					className='text-gray-500 cursor-pointer'
					initial={reset}
					whileHover={hover}
					whileTap={{ scale: 0.8 }}
					animate={reset}>
					<FiX size={20} />
				</motion.button>
			</div>
		</motion.div>
	);
};
