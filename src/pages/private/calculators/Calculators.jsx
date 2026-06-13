import styles from './Calculators.module.scss'
import { FormCalculator } from "./components/porcentageNormal/formCalculator/FormCalculator";
import { FormCalculatorSingle } from "./components/porcentageSingle/formCalculatorSingle/FormCalculatorSingle";

export const Calculators = () => {
	return (
		<div className={styles.calculators}>
			<FormCalculator />
			<FormCalculatorSingle />
		</div>
	);
};
