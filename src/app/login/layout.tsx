import Navbar from '@/components/navbar';

const Layout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
};

export default Layout;
