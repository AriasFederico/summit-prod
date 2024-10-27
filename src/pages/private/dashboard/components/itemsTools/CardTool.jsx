import "./CardTools.scss";
import { NavLink } from "react-router-dom";

export const CardTool = ({ name, svg, redirect }) => {
	return (
		<NavLink
			to={redirect}
			className={({ isActive }) =>
				isActive ? "CardTools-active" : "CardTools"
			}
		>
			{svg}
			<span className="CardTools-title">{name}</span>
		</NavLink>
	);
};
