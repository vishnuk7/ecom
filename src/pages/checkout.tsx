import { ItemsContainer } from '../components/Checkout/ItemsContainer';
import { Total } from '../components/Checkout/Total';

export const Checkout = () => {
	return (
		<div className='flex lg:flex-row flex-col justify-between'>
			<div className='lg:w-1/2 w-full'>
				<ItemsContainer />
			</div>
			<div className='lg:w-1/3 w-full '>
				<Total />
			</div>
		</div>
	);
};
