import { motion } from 'framer-motion'
import { useEffect, useState } from "react";
import { iconMap } from "../../../../../components/iconMap";
import { SectionLayout } from '../../../../../components/layout'
import { getDolarData } from "../../services/getDolar";
import styles from './DolarHeader.module.scss'
export const DolarHeader = () => {
	const IconStat = iconMap.stats;
	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const getData = await getDolarData();
				setData(getData)
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	const [selectedDolar, setSelectedDolar] = useState('oficial');
	const dolarActive = data?.find((e) => e.casa === selectedDolar)
	const dolarType = ['oficial', 'blue', 'bolsa', 'mayorista', 'tarjeta']

	return (
		<details className={styles.dolarSummary}>
			<summary className={styles.header}>
				<div className={styles.iconContainer}>
					{IconStat && <IconStat className={styles.iconStat} />}
				</div>
				<p>Cotización del dolar</p>
			</summary>
			<div className={styles.summaryContent}>
				<div className={styles.dolarTabs}>
					{dolarType?.map((type) => (
						<button key={type} className={`${styles.buttonHouse} ${selectedDolar === type ? styles.houseActive : styles.house}`} onClick={() => setSelectedDolar(type)}>{type.toUpperCase()}</button>
					))}
				</div>

				<div className={styles.tabsContent}>
					{
						dolarActive ? (
							<div className={styles.cardValues}>
								<div className={`${styles.value} ${styles.buys}`} initial={{ opacity: 0, y: 50 }}
								>
									<span>COMPRA</span>
									<p>${dolarActive.compra}</p>
								</div>
								<div className={`${styles.value} ${styles.sale}`}>
									<span>VENTA</span>
									<p>${dolarActive.venta}</p>
								</div>
							</div>) : (
							<p>Cargando cotización..</p>
						)
					}
				</div>
			</div>
		</details>
	);
};
