import { useContext, useEffect, useState } from 'react';
import { BsList, BsX } from "react-icons/bs";
import { Link, NavLink } from 'react-router-dom';
import pricify from '../../../assets/pricify.png'
import { GlobalContext } from '../../../context/GlobalContext';
import { ButtonCta } from '../../ui';
import styles from './Header.module.scss'

export const Header = () => {
	const NAV_LINKS = [
		{ label: 'Inicio', href: '/' },
		{ label: 'Iniciar sesión', href: '/ingresar' },
		{ label: 'Registrarse', href: '/registrarse' },
	]
	const { logged, user, signOut } = useContext(GlobalContext);
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => setIsOpen(!isOpen);
	const BurgerIcon = isOpen ? BsX : BsList;

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 900) {
				// cambiar el tamaño del maxwidth del header
				setIsOpen(false);
			}
		};
		handleResize();
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const handleSignOut = () => {
		signOut();
		setLogged(false);
		redirect("/");
	};

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<Link to={'/'} className={styles.logo} onClick={() => setIsOpen(false)}>
					<img src={pricify} alt="Pricify" />
					Pricify
				</Link>
				<nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>

					{
						user ? (
							<div className={styles.navUser}>
								<p className={styles.userName}>{user}</p>
								<ButtonCta onClick={handleSignOut} text={'Cerrar sesión'} icon={'singOut'} />
							</div>
						) :
							<>
								{
									NAV_LINKS?.map(({ label, href }) => (
										<NavLink key={href} to={href} className={({ isActive }) => isActive ? styles.linkActive : styles.link} onClick={() => setIsOpen(false)}>
											{label}
										</NavLink>
									))
								}
							</>
					}
				</nav>
				<button
					className={styles.burger}
					onClick={toggleMenu}
					aria-label='Menu'
				>
					<BurgerIcon className={styles.icon} />
				</button>
			</div>
		</header >)
};
