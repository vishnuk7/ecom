import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
import styled from 'styled-components';
import { loadStripe } from '@stripe/stripe-js';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { CustomBtn } from '../CusttomBtn';

const CheckoutForm = () => {
	const stripe = useStripe();
	const elements = useElements();
	const { totalPrice } = useSelector((state: RootState) => state.cart);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		// Block native form submission.
		event.preventDefault();

		if (!stripe || !elements) {
			// Stripe.js has not loaded yet. Make sure to disable
			// form submission until Stripe.js has loaded.
			return;
		}

		// Get a reference to a mounted CardElement. Elements knows how
		// to find your CardElement because there can only ever be one of
		// each type of element.
		const cardElement = elements.getElement(CardElement);

		// Use your card Element with other Stripe.js APIs
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card: cardElement!,
		});

		if (error) {
			console.log('[error]', error);
		} else {
			console.log('[PaymentMethod]', paymentMethod);
		}
	};

	const pay = `Pay ${totalPrice}`;

	return (
		<form onSubmit={handleSubmit}>
			<CardStyled className='shadow-2xl h-24 px-5'>
				<CardElement className='' />
			</CardStyled>
			<CustomBtn type='submit' bgColor='bg-primary' textColor='text-white' value={pay} disabled={!stripe} />
		</form>
	);
};

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE!);

export const Stripe = () => {
	console.log(process.env.REACT_APP_STRIPE);

	return (
		<Elements stripe={stripePromise}>
			<CheckoutForm />
		</Elements>
	);
};

const CardStyled = styled.div`
	input {
		border: 1px solid #333 !important;
	}
`;
