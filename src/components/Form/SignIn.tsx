import { FormEvent, useState } from 'react';
import { FormInput } from './FormInput';
import { InputType } from './type';
import { CustomBtn } from '../CusttomBtn';
import { auth, signInWithGoogle } from '../../firebase/firebase.util';

export const SignIn = () => {
	const [userData, setUserData] = useState<InputType>();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserData({
			...userData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		try {
			if (userData) {
				await auth.signInWithEmailAndPassword(userData?.email, userData?.password);
				setUserData({
					email: '',
					password: '',
				});
			}
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div>
			<h2 className='text-2xl'>I already have an account</h2>
			<span className='text-gray-500'>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					type='email'
					label='Email'
					value={userData?.email}
					name='email'
					handleChange={handleChange}
					required={true}
				/>
				<FormInput
					type='password'
					label='Password'
					value={userData?.password}
					name='password'
					handleChange={handleChange}
					required={true}
				/>
				<div className='flex'>
					<div className='mr-4'>
						<CustomBtn bgColor='bg-black' textColor='text-gray-200' type='submit' value='Sign In' />
					</div>
					<div>
						<CustomBtn
							onClick={() => signInWithGoogle()}
							bgColor='bg-blue-600'
							textColor='text-gray-200'
							type='button'
							value='Sign In With Google'
						/>
					</div>
				</div>
			</form>
		</div>
	);
};
