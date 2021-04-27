import { useState } from 'react';
import { FormInput } from './FormInput';
import { SingType } from './type';
import { CustomBtn } from '../CusttomBtn';
import { signInWithGoogle } from '.././../firebase/firebase.util';

export const SingIn = () => {
	const [userData, setUserData] = useState<SingType>();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserData({
			...userData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div>
			<h2 className='text-2xl'>I already have an account</h2>
			<span className='text-gray-500'>Sign in with your email and password</span>

			<form>
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
							type='submit'
							value='Sign In With Google'
						/>
					</div>
				</div>
			</form>
		</div>
	);
};
