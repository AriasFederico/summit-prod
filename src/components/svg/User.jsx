import { useContext } from "react";
import "./styles/User.scss";
import { GlobalContext } from "../../context/GlobalContext";

export const User = ({ className, click, event }) => {
	const { user } = useContext(GlobalContext);
	return (
		<div className="User">
			<span className="User-logo">{user[0].toUpperCase()}</span>
			<div className="admin-user">
				<p className="User-admin">Administrador</p>
				<p className="User-username">{user}</p>
			</div>
		</div>
	);
};
