import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { Stripe } from './Stripe';

export const Total = () => {
	const { totalPrice } = useSelector((state: RootState) => state.cart);
	return (
		<div>
			<p className='text-xl pb-10'>Total</p>
			<div>
				<p className='flex justify-between pb-5'>
					<p>Sub Total</p>
					<p className='text-gray-500'> &#8377;{totalPrice}</p>
				</p>
				<p className='flex justify-between pb-5'>
					<p>Delivery</p>
					<p className='text-gray-500'>Free</p>
				</p>
			</div>
			<div>
				<p className='pb-3'>We Accept:</p>
				<img
					className='w-1/2'
					src='https://user-images.githubusercontent.com/52581/44384465-5e312780-a570-11e8-9336-7b54978a9e64.png'
					alt='cards'
				/>
			</div>
			<div>{/* <Stripe /> */}</div>
		</div>
	);
};
