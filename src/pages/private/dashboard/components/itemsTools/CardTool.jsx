import { NavLink } from "react-router-dom";
import { iconMap } from "../../../../../components/iconMap";
import styles from './CardTool.module.scss'

export const CardTool = ({ title, subtitle, icon, redirect, event }) => {
	const IconComponent = iconMap[icon];

	return (
		<NavLink
			to={redirect}
			className={({ isActive }) => `${styles.cardTool} ${isActive ? styles.active : ''}`
			}
			onClick={event}
		>
			<div className={styles.iconContainer}>
				{IconComponent && <IconComponent className={styles.icon} />}
			</div>
			<div className={styles.group}>
				<span className={styles.title}>{title}</span>
				<p className={styles.subtitle}>{subtitle}</p>
			</div>
		</NavLink>
	);
};
