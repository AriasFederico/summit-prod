import './NavMobileCommon.scss';
import { Link, NavLink } from 'react-router-dom';
import { Close } from '../../../../../components/svg/Close';
import { Hamburger } from '../../../../../components/svg/Hamburger';
import { Logo } from '../../../../../components/svg/Logo';
import { useNav } from '../../../hooks/useNav';

export const NavMobileCommon = () => {
	const { activeMenu, handleMenu, closeMenu } = useNav();

	return (
		<nav className='NavMobileCommon'>
			<Logo
				className={'NavMobileCommon-logo'}
				svg={'NavMobileCommon-svg-logo'}
			/>

			{activeMenu ? (
				<Close className={'NavMobileCommon-close'} click={closeMenu} />
			) : (
				<Hamburger className={'NavMobileCommon-hamburger'} click={handleMenu} />
			)}

			{activeMenu && (
				<div
					className='NavMobileCommon-menu'
					data-aos={'fade-left'}
					data-aos-duration={1500}
				>
					<NavLink
						to={'/'}
						className={({ isActive }) =>
							isActive ? 'NavMobileCommon-link-active' : 'NavMobileCommon-link'
						}
						onClick={closeMenu}
					>
						INICIO
					</NavLink>
					<NavLink
						to={'/ingresar'}
						className={({ isActive }) =>
							isActive ? 'NavMobileCommon-link-active' : 'NavMobileCommon-link'
						}
						onClick={closeMenu}
					>
						INICIAR SESIÓN
					</NavLink>
					<NavLink
						to={'/registrarse'}
						className={({ isActive }) =>
							isActive ? 'NavMobileCommon-link-active' : 'NavMobileCommon-link'
						}
						onClick={closeMenu}
					>
						REGISTRARSE
					</NavLink>
				</div>
			)}
		</nav>
	);
};
