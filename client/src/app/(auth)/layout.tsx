import React from "react";

const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return (
		<div className="bg-white h-full flex-col items-center justify-center w-full">
			{children}
		</div>
	);
};

export default AuthLayout;
