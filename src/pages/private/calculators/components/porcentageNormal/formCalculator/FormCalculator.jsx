import { iconMap } from "../../../../../../components/iconMap.js";
import { ButtonCta } from "../../../../../../components/ui/index.js";
import { Input } from "../../input/Input";
import { useFormCalculator } from "../hooks/useFormCalculator.js";
import styles from './FormCalculator.module.scss'
import { ResCalculator } from "./resCalculator/ResCalculator.jsx";

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
	} = useFormCalculator();

	const { valueCant, valueName, valueUnity } = finalValues;
	const IconComponent = iconMap.calculator;

	return (
		<details className={styles.formCalculator} open>
			<summary className={styles.header}>
				<div className={styles.iconContainer}>
					<IconComponent className={styles.icon} />
				</div>
				Calculadora por volumen o cantidad
			</summary>
			<form onSubmit={handleSubmit} className={styles.calculatorForm}>
				<div className={styles.markedContainer}>
					<label className={styles.label}>
						Marcado por cantidad total
						<input className={styles.input} type="number" name={"markedCant"} value={markedCant} onChange={handleChange} onWheel={(e) => e.target.blur()} placeholder="%" step="any" />
					</label>
					<label className={styles.label}>
						Marcado por unidad
						<input className={styles.input} type="number" name="markedUnity" onWheel={(e) => e.target.blur()} value={markedUnity} onChange={handleChange} placeholder="%" step="any" />
					</label>
				</div>

				<input className={styles.input} type="text" name="name" value={inputName} onChange={handleChangeName} placeholder="Nombre del producto" />

				<input className={styles.input} type="number" name="price" value={price} onChange={handleChange} placeholder="$ Costo del producto" onWheel={(e) => e.target.blur()} />

				<input className={styles.input} type="number" name="quantity" value={quantity} onChange={handleChange} placeholder="Cantidad/Volumen total (ej: Kg)" onWheel={(e) => e.target.blur()} step="any" />

				<ButtonCta type="submit" text={'Calcular'} />
				<ButtonCta onClick={clearForm} text={'Resetear'} icon={'reset'} variant="secondary" />

				<ResCalculator
					cant={valueCant}
					name={valueName}
					unity={valueUnity}
					event={addData}
				/>
			</form>
		</details >
	);
};

// guardar en localSorage el valor de los marcados
// poner el valor de los datos del producto en mayuscula
