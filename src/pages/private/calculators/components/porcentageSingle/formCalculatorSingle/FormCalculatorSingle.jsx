import "./FormCalculatorSingle.scss";
import { Input } from "../../input/Input";
import { Button } from "../../components";
import { ButtonReset } from "../../buttons/reset/ButtonReset";
import { ResCalculatorSingle } from "./ResCalculatorSingle/ResCalculatorSingle";
import { useFormCalculatorSingle } from "../hooks/useFormCalculatorSingle";

export const FormCalculatorSingle = () => {
	const {
		handleChange,
		handleChangeName,
		handleSubmit,
		clearForm,
		inputNameSingle,
		inputsValues,
		finalValues,
		addData,
	} = useFormCalculatorSingle();

	const { valueName, valueProduct } = finalValues;
	const { markedProduct, price } = inputsValues;

	return (
		<form className="FormCalculatorSingle" onSubmit={handleSubmit}>
			<div className="FormCalculatorSingle-marked-total">
				<p>Marcado del producto</p>
				<Input
					type={"number"}
					placeholder={"Marcado ( % )"}
					name={"markedProduct"}
					valueInput={markedProduct}
					change={handleChange}
				/>
			</div>

			<Input
				type={"text"}
				placeholder={"Nombre del producto"}
				name={"name"}
				valueInput={inputNameSingle}
				change={handleChangeName}
			/>

			<Input
				type={"number"}
				placeholder={"Costo del producto ( $ )"}
				name={"price"}
				valueInput={price}
				change={handleChange}
			/>

			<Button value={"CALCULAR"} type={"submit"} />
			<ButtonReset value={"Resetear"} onClick={clearForm} />

			<ResCalculatorSingle
				cant={valueProduct}
				event={addData}
				name={valueName}
				price={valueProduct}
			/>
		</form>
	);
};
