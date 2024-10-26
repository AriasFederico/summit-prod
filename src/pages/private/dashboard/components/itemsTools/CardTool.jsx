import "./CardTools.scss";
import { NavLink } from "react-router-dom";

export const CardTool = ({ name, svg, redirect }) => {
	return (
		<a href={redirect}>
			{svg}
			<span className="CardTools-title">{name}</span>
		</a>
	);
};
