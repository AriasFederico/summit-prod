import { useEffect } from "react";
import { Check } from "../../../../../components/svg/Check";
import "./Notify.scss";
import Aos from "aos";
export const Notify = () => {
	useEffect(() => {
		Aos.init();
	}, []);

	return (
		<div className="Notify" data-aos={"fade-left"}>
			<Check className={"Notify-svg"} />
			<p className="Notify-message">Producto añadido con éxito</p>
		</div>
	);
};
