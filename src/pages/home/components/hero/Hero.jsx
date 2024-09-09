import { Link } from 'react-router-dom';
import banner from '../../../../../public/banner/hero.jpg';
import { Rocket } from '../../../../components/svg/Rocket';
import { ItemCheck } from './checks/ItemCheck';
import { HeroHeader } from './heroHeader/heroHeader';
import './Hero.scss';
export const Hero = () => {
	return (
		<main className='Hero' data-aos={'zoom'} data-aos-duration={1000}>
			<div className='Hero-item-fx'>
				<HeroHeader
					title={'Gestiona tus precios, maximiza tus ganancias'}
					subtitle={
						'Summit es una aplicación web gratuita e innovadora diseñada para facilitar la gestión y el cálculo de precios de manera rápida y eficiente'
					}
				/>
				<Link to={'/registrarse'} className='Hero-link'>
					Registra tu negocio
					<Rocket />
				</Link>

				<div className='Hero-checks'>
					<ItemCheck p={'Acceso a 4 calculadoras de porcentajes'} />
					<ItemCheck p={'Registro y acceso fácil'} />
					<ItemCheck p={'Gestión de lista de precios de hasta 100 productos'} />
				</div>
			</div>
			<div className='Hero-item-secondary'>
				<img
					src={banner}
					alt=''
					className='Hero-banner'
					data-aos={'fade-up'}
					data-aos-duration={1200}
				/>
			</div>
		</main>
	);
};
