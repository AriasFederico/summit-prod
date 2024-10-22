import { useFormCalculator } from "../../hooks/useFormCalculator.js";
import { Button } from "../../../buttons/Button.jsx";
import "./ResCalculator.scss";

export const ResCalculator = ({ name, cant, unity }) => {
	const { resValue } = useFormCalculator();
	return (
		<div className="ResCalculator">
			<div className="ResCalculator-cont">
				<div className="ResCalculator-cant-cont">
					<h4>TU PRECIO POR CANTIDAD TOTAL</h4>
					<p className="ResCalculator-res">{cant ? `$ ${cant}` : "-"}</p>
				</div>
				<div className="ResCalculator-unity-cont">
					<h4>TU PRECIO POR UNIDAD</h4>
					<p className="ResCalculator-res">{unity ? `$ ${unity}` : "-"}</p>
				</div>
			</div>
			<Button value={"AGREGAR A MIS PRODUCTOS"} />
		</div>
	);
};
