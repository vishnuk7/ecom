import { SignIn, SignUp } from '../components';

export const Form = () => {
	return (
		<div className='flex flex-col sm:flex-row'>
			<div className='w-full  sm:w-1/2  mr-20'>
				<SignIn />
			</div>
			<div className='w-full sm:w-1/2'>
				<SignUp />
			</div>
		</div>
	);
};
