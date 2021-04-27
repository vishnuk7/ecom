import { FormEvent, useState } from 'react';
import { CustomBtn } from '../CusttomBtn';
import { FormInput } from './FormInput';
import { InputType } from './type';
import { auth, createProfile } from '../../firebase/firebase.util';

export const SignUp = () => {
	const [userData, setUserData] = useState<InputType>();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setUserData({
			...userData,
			[name]: value,
		});
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		try {
			if (userData) {
				const { user } = await auth.createUserWithEmailAndPassword(userData?.email, userData?.password);
				if (user) await createProfile(user, { displayName: userData?.displayName });
				setUserData({
					displayName: '',
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
			<h2 className='text-2xl'>I do not have a account</h2>
			<span className='text-gray-500'>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					name='displayName'
					value={userData?.username}
					label='User Name'
					type='text'
					required={true}
					handleChange={handleChange}
				/>
				<FormInput
					name='email'
					value={userData?.email}
					label='Email'
					type='email'
					required={true}
					handleChange={handleChange}
				/>
				<FormInput
					name='password'
					value={userData?.password}
					label='Password'
					type='password'
					required={true}
					handleChange={handleChange}
				/>
				<CustomBtn bgColor='bg-black' textColor='text-gray-200' type='submit' value='Sign Up' />
			</form>
		</div>
	);
};
