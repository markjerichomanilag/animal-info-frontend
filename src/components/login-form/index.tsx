'use client';

import { isValidEmail } from '@/constants';
import { cn } from '@/libs/utils';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<{ email: string; password: string }>();

	const submitLoginForm = () => {
		console.log(errors);
		console.log('Clicked');
	};

	useEffect(() => {
		console.log(errors);
	}, [errors]);

	return (
		<form
			className="flex flex-col gap-[10px]"
			onSubmit={handleSubmit(submitLoginForm)}
		>
			<label>Email</label>
			<input
				{...register('email', {
					required: true,
					pattern: {
						value: isValidEmail,
						message: 'Please enter a valid email',
					},
				})}
				type="email"
				className={cn(
					'border-[2px] border-slate-200 border-solid rounded-lg px-[10px] py-[4px]',
					errors.email ? '!border-[#EE3C3C]' : ''
				)}
			/>
			{errors.email?.message && (
				<p className="text-[#EE3C3C]">{errors.email?.message}</p>
			)}
			<label>Password</label>
			<input
				{...register('password', {
					required: true,
					minLength: { value: 9, message: 'Minimum length 9' },
				})}
				type="password"
				className={cn(
					'border-[2px] border-slate-200 border-solid rounded-lg px-[10px] py-[4px]',
					errors.password ? '!border-[#EE3C3C]' : ''
				)}
			/>
			{errors.password?.message && (
				<p className="text-[#EE3C3C]">{errors.password?.message}</p>
			)}
			<button
				type="submit"
				className="bg-slate-400 rounded-lg w-[100px] self-center hover:bg-slate-200"
			>
				Submit
			</button>
		</form>
	);
};

export default LoginForm;
