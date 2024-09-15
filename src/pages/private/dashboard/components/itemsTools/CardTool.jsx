import './CardTools.scss';
import { NavLink } from 'react-router-dom';

export const CardTool = ({ name, svg, redirect }) => {
	return (
		<NavLink
			className={({ isActive }) =>
				isActive ? 'CardTools-active' : 'CardTools'
			}
			to={redirect}
		>
			{svg}
			<span className='CardTools-title'>{name}</span>
		</NavLink>
	);
};
