import { iconMap } from '../../../../../components/iconMap'
import styles from './Search.module.scss'
export const Search = ({ value, change, click, placeholder }) => {
	const IconSearch = iconMap.search;
	return (
		<div className={styles.search}>
			<IconSearch className={styles.icon} />
			<input
				className={styles.input}
				type="text"
				value={value}
				onChange={change}
				onClick={click}
				placeholder={placeholder}
			/>
		</div>
	);
};
