import React from "react";

const RightSide = ({ children }: { children: React.ReactNode }) => {
	return <div className="w-full h-full hidden lg:flex">{children}</div>;
};

export default RightSide;
