import './NavPcCommon.scss';
import { Link, NavLink } from 'react-router-dom';
import { Logo } from '../../../../../components/svg/Logo';

export const NavPcCommon = () => {
	return (
		<nav className='NavPcCommon'>
			<Logo className={'NavPcCommon-logo'} svg={'NavPcCommon-svg-logo'} />
			<div className='NavPcCommon-menu'>
				<NavLink
					to={'/ingresar'}
					className={({ isActive }) =>
						isActive ? 'NavPcCommon-link-active' : 'NavPcCommon-link'
					}
				>
					Iniciar sesión
				</NavLink>
				<NavLink to={'/registrarse'} className='NavPcCommon-link-register'>
					Registra tu negocio
				</NavLink>
			</div>
		</nav>
	);
};
