import { ButtonCta } from "../../../../../../../components/ui";
import styles from './ResCalculatorSingle.module.scss'
export const ResCalculatorSingle = ({ price, event, name }) => {
	return (
		<div className={styles.resCalculatorSingle}>
			<div className={styles.content}>
				<p className={styles.priceType}>Precio del producto</p>
				<span className={styles.res}>{price ? `$ ${price}` : "-"}</span>
			</div>
			<ButtonCta
				text={"Agregar a mis productos"}
				onClick={() => event({ name, price })}
				variant="secondary" icon={'add'} />
		</div>
	);
};
