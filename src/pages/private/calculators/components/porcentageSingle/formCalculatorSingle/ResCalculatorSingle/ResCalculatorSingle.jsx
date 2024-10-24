import { Button } from "../../../components";
export const ResCalculatorSingle = ({ cant }) => {
	return (
		<div className="ResCalculator">
			<div className="ResCalculator-cont-product">
				<h4>TU PRECIO POR CANTIDAD TOTAL</h4>
				<p className="ResCalculator-res">{cant ? `$ ${cant}` : "-"}</p>{" "}
			</div>
			<Button value={"AGREGAR A MIS PRODUCTOS"} />
		</div>
	);
};
