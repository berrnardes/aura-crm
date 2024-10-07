"use client";

import { useState } from "react";

const Sidebar = () => {
	const [exanded, setExpanded] = useState<boolean>(false);

	return <aside className="bg-white border-4 w-full max-w-72 min-w-2"></aside>;
};

export default Sidebar;
