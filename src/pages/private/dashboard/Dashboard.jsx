import "./Dashboard.scss";
import { Outlet } from "react-router-dom";
import { ToolsHeader } from "./components";
import { DolarHeader } from "./components/dolarHeader/DolarHeader";
export const Dashboard = () => {
	return (
		<section className="Dashboard">
			<DolarHeader />
			<ToolsHeader />
			<Outlet />
		</section>
	);
};
