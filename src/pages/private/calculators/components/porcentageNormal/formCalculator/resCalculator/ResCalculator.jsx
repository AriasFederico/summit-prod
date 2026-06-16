import { ButtonCta } from "../../../../../../../components/ui/index.js";
import styles from './ResCalculator.module.scss'

export const ResCalculator = ({ name, cant, unity, event }) => {
	return (
		<div className={styles.resCalculator}>
			<div className={styles.contentFlex}>
				<div className={styles.itemFlex}>
					<p className={styles.priceType}>Precio por cantidad total</p>
					<span className={styles.res}>{cant ? `$ ${cant}` : "-"}</span>
				</div>
				<div className={styles.itemFlex}>
					<p className={styles.priceType}>Precio por unidad</p>
					<span className={styles.res}>{unity ? `$ ${unity}` : "-"}</span>
				</div>
			</div>
			<ButtonCta onClick={() => event({ name, cant, unity })} text={'Agregar a mis productos'} variant="secondary" icon={'add'} />
		</div>
	);
};
