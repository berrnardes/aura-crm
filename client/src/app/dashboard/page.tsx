import MainContent from "./components/main-content";
import Sidebar from "./components/sidebar";
import SidebarMobile from "./components/sidebar-mobile";

const Dashboard = () => {
	return (
		<div className="flex h-full">
			<SidebarMobile />
			<Sidebar />
			<MainContent />
		</div>
	);
};

export default Dashboard;
