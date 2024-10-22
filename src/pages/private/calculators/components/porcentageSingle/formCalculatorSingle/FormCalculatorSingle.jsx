import "./FormCalculatorSingle.scss";
import { Input } from "../../input/Input";
import { Button } from "../../components";
import { ButtonReset } from "../../buttons/reset/ButtonReset";
import { ResCalculatorSingle } from "./ResCalculatorSingle/ResCalculatorSingle";

export const FormCalculatorSingle = () => {
	return (
		<form className="FormCalculatorSingle">
			<div className="FormCalculatorSingle-marked-total">
				<p>Marcado del producto</p>
				<Input
					type={"number"}
					placeholder={"Marcado ( % )"}
					name={"markedCant"}
				/>
			</div>

			<Input type={"text"} placeholder={"Nombre del producto"} name={"name"} />

			<Input
				type={"number"}
				placeholder={"Costo del producto ( $ )"}
				name={"markedCant"}
			/>

			<Button value={"CALCULAR"} type={"submit"} />
			<ButtonReset value={"Resetear"} onClick={""} />

			<ResCalculatorSingle />
		</form>
	);
};
