import { iconMap } from "../../../../../../components/iconMap";
import { ButtonCta } from "../../../../../../components/ui";
import { Input } from "../../input/Input";
import { useFormCalculatorSingle } from "../hooks/useFormCalculatorSingle";
import styles from './FormCalculatorSingle.module.scss'
import { ResCalculatorSingle } from "./ResCalculatorSingle/ResCalculatorSingle";

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

	const { valueName, valueCant } = finalValues;
	const { markedProduct, price } = inputsValues;
	const IconComponent = iconMap.calculator;


	return (
		<details className={styles.formCalculatorSingle} open>
			<summary className={styles.header}>
				<div className={styles.iconContainer}>
					<IconComponent className={styles.icon} />
				</div>
				Calculadora de producto individual
			</summary>

			<form className={styles.calculatorForm} onSubmit={handleSubmit}>
				<div className={styles.markedContainer}>
					<label className={styles.label}>
						Marcado del producto
						<input className={styles.input} type="number" name={"markedProduct"} value={markedProduct} onChange={handleChange} onWheel={(e) => e.target.blur()} placeholder="%" step={'any'} />
					</label>
				</div>

				<input className={styles.input} type="text" name="name" value={inputNameSingle} onChange={handleChangeName} placeholder="Nombre del producto" />

				<input className={styles.input} type="number" name="price" value={price} onChange={handleChange} placeholder="$ Costo del producto" onWheel={(e) => e.target.blur()} />
				<ButtonCta type="submit" text={'Calcular'} />
				<ButtonCta text={'Resetear'} icon={'reset'} variant="secondary" onClick={clearForm} />
				{/* <Button value={"CALCULAR"} type={"submit"} />
				<ButtonReset value={"Resetear"} onClick={clearForm} /> */}

				<ResCalculatorSingle
					event={addData}
					name={valueName}
					price={valueCant}
				/>
			</form>
		</details>
	);
};
