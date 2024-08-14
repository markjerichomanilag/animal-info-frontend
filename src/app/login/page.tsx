import LoginForm from '@/components/login-form';

function Login() {
	return (
		<div className="flex justify-center mt-[20px]">
			<div className="box-border text-center w-[500px] p-[10px] border-[2px] border-solid border-slate-200">
				<h1 className="text-[32px] font-bold mb-[10px]">Login</h1>
				<LoginForm />
			</div>
		</div>
	);
}

export default Login;
