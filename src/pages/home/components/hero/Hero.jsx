import { Link } from 'react-router-dom';
import { Rocket } from '../../../../components/svg/Rocket';
import './Hero.scss';
export const Hero = () => {
	return (
		<main className='Hero' data-aos={'zoom'} data-aos-duration={1000}>
			<div className='Hero-item-fx'>
				<h1 className='Hero-h1'>CONTROLA TU NEGOCIO</h1>
				<p className='Hero-p'>
					Summit es una aplicación web gratuita e innovadora diseñada para
					facilitar la gestión y el cálculo de precios de manera rápida y
					eficiente
				</p>
				<Link to={'/registrarse'} className='Hero-link'>
					Registra tu negocio
					<Rocket />
				</Link>
			</div>
		</main>
	);
};
