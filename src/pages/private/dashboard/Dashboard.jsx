import "./Dashboard.scss";
import { Outlet } from "react-router-dom";
import { ToolsHeader } from "./components";
import { DolarHeader } from "./components/dolarHeader/DolarHeader";
import { Notify } from "../calculators/components/notify/Notify";
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";

export const Dashboard = () => {
	const { exit } = useContext(GlobalContext);

	return (
		<section className="Dashboard">
			{exit && <Notify />}
			<DolarHeader />
			<ToolsHeader />
			<Outlet />
		</section>
	);
};
