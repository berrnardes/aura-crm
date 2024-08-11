const Header = ({ title }: { title: string }) => {
	return (
		<div className="h-full flex py-5">
			<h1 className="text-2xl font-semibold leading-tight tracking-normal text-zinc-800">
				{title}
			</h1>
		</div>
	);
};

export default Header;
