import styles from './TopSection.module.scss';

export const TopSection = ({ text }) => {
	return <span className={styles.topSection}>{text}</span>;
};
