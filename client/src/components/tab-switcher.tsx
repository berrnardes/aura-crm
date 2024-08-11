import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

type TabSwitcherProps = {
	signin: React.ReactNode;
	signup: React.ReactNode;
};

const TabSwitcher = (props: TabSwitcherProps) => {
	return (
		<Tabs defaultValue="signin" className="">
			<TabsList className="bg-zinc-400 ">
				<TabsTrigger value="signin">Sign-in</TabsTrigger>
				<TabsTrigger value="signup">Sign-up</TabsTrigger>
			</TabsList>
			<TabsContent value="signin">{props.signin}</TabsContent>
			<TabsContent value="signup">{props.signup}</TabsContent>
		</Tabs>
	);
};

export default TabSwitcher;
