import { NavLink, useNavigate } from "react-router-dom";
import { User } from "../../../../../components/svg/User";
import "./NavPcLogged.scss";
import { useContext, useState } from "react";
import { Logo } from "../../../../../components/svg/Logo";
import { GlobalContext } from "../../../../../context/GlobalContext";

export const NavPcLogged = ({ user }) => {
	const redirect = useNavigate();
	const { signOut, setLogged } = useContext(GlobalContext);
	const [menuActive, setMenuActive] = useState(false);

	const handleSignOut = () => {
		signOut();
		setLogged(false);
		redirect("/");
	};

	return (
		<nav className="NavPcLogged">
			<Logo className={"NavPcLogged-logo"} svg={"NavPcLogged-svg-logo"} />
			<User
				className={"NavPcLogged-user"}
				event={() => setMenuActive(!menuActive)}
			/>

			{menuActive && (
				<div className="NavPcLogged-menu-logout">
					<button className="NavPcLogged-logout" onClick={handleSignOut}>
						Cerrar sesión
					</button>
				</div>
			)}
		</nav>
	);
};
