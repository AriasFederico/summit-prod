import styles from './Footer.module.scss';
export const Footer = ({ name }) => {
	return (
		<footer className={styles.footer}>
			<a href={'#'} className={styles.logo} onClick={() => setIsOpen(false)}>
				{/* img si aplica */}
				Pricify
			</a>
			{/* <Logo text={'nutri'} size='sm' url={'#'} /> */}
			<p className={styles.copyright}>
				© 2026 {name}. Todos los derechos reservados.
			</p>
		</footer>
	);
};
