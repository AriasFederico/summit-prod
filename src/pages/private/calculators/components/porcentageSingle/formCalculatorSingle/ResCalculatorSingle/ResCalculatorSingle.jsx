import { Button } from "../../../components";
export const ResCalculatorSingle = ({ cant, event, name, price }) => {
	return (
		<div className="ResCalculator">
			<div className="ResCalculator-cont-product">
				<h4>TU PRECIO POR CANTIDAD TOTAL</h4>
				<p className="ResCalculator-res">{cant ? `$ ${cant}` : "-"}</p>{" "}
			</div>
			<Button
				value={"AGREGAR A MIS PRODUCTOS"}
				click={() => event({ name, price })}
			/>
		</div>
	);
};
