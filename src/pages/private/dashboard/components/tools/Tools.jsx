import styles from './Tools.module.scss'
export const Tools = ({ nameTool }) => {
	return (
		<div className={styles.tools}>
			<p className={styles.name}>{nameTool}</p>
		</div>
	);
};
