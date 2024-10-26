import { Link } from "react-router-dom";
import "./styles/Logo.scss";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
export const Logo = ({ className, svg, click }) => {
	const { logged } = useContext(GlobalContext);
	return (
		<Link
			className={`Logo ${className}`}
			onClick={click}
			to={logged ? "/control/calculators" : "/"}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 32 32"
				className={svg}
				data-aos={"zoom-in"}
			>
				<path
					fill="currentColor"
					d="M15.506 2.44L3 24h2.313L15.51 6.42l10.119 17.379L29.574 17h-2.312l-1.637 2.82zm.02 7.99L8.813 22h2.315l4.4-7.59L24.027 29h2.315z"
				/>
			</svg>
			Pricify.
		</Link>
	);
};
