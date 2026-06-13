import { iconMap } from '../../iconMap';
import styles from './ItemCard.module.scss';

export const ItemCard = ({ icon, title, text }) => {
	// en caso te usar react-icon
	const IconComponent = iconMap[icon];

	return (
		<div className={styles.card}>
			{icon && <div className={styles.icon_container}>
				<IconComponent className={styles.icon} />
			</div>
			}
			<h3 className={styles.title}>{title}</h3>
			<p className={styles.text}>{text}</p>
		</div>
	);
};
