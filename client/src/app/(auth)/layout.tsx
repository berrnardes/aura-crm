import React from "react";

const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return <div className="bg-zinc-200">{children}</div>;
};

export default AuthLayout;
