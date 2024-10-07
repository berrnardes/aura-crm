import Sidebar from "@/components/sidebar";
import MainContent from "./components/main-content";

const Dashboard = () => {
	return (
		<div className="flex h-full w-full bg-zinc-100 border-4 border-red-600">
			<Sidebar />
			<MainContent />
		</div>
	);
};

export default Dashboard;
