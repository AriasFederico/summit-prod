import { Button } from "../../components.js";
import { ButtonReset } from "../../buttons/reset/ButtonReset.jsx";
import { Input } from "../../input/Input";
import { ResCalculator } from "./resCalculator/ResCalculator.jsx";
import { useFormCalculator } from "../hooks/useFormCalculator.js";
import "./FormCalculator.scss";

export const FormCalculator = () => {
	const {
		handleSubmit,
		handleChange,
		markedCant,
		markedUnity,
		price,
		quantity,
		handleChangeName,
		inputName,
		finalValues,
		clearForm,
		addData,
		list,
	} = useFormCalculator();

	const { valueCant, valueName, valueUnity } = finalValues;

	return (
		<form className="FormCalculator" onSubmit={handleSubmit}>
			<div className="FormCalculator-marked">
				<div className="FormCalculator-marked-total">
					<p>Marcado por cantidad total</p>
					<Input
						type={"number"}
						placeholder={"Marcado ( % )"}
						className={"FormCalculator-marked-input"}
						name={"markedCant"}
						valueInput={markedCant}
						change={handleChange}
					/>
				</div>
				<div className="FormCalculator-marked-unity">
					<p>Marcado por unidad</p>
					<Input
						type={"number"}
						placeholder={"Marcado ( % )"}
						className={"FormCalculator-marked-input"}
						name={"markedUnity"}
						valueInput={markedUnity}
						change={handleChange}
					/>
				</div>
			</div>

			<Input
				type={"text"}
				placeholder={"Nombre del producto"}
				change={handleChangeName}
				name={"name"}
				valueInput={inputName}
			/>
			<Input
				type={"number"}
				placeholder={"Costo del producto ( $ )"}
				name={"price"}
				valueInput={price}
				change={handleChange}
			/>

			<Input
				type={"number"}
				placeholder={"Cantidad/Volumen total (ej: Kg)"}
				name={"quantity"}
				valueInput={quantity}
				change={handleChange}
			/>

			<Button value={"CALCULAR"} type={"submit"} />
			<ButtonReset value={"Resetear"} onClick={clearForm} />
			<ResCalculator
				cant={valueCant}
				name={valueName}
				unity={valueUnity}
				event={addData}
			/>
		</form>
	);
};

// guardar en localSorage el valor de los marcados
// poner el valor de los datos del producto en mayuscula
