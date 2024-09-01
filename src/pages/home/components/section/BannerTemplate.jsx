import './BannerTemplate.scss';
import calculatorBanner from '../../../../../public/banner/calc.png';

export const BannerTemplate = ({ title, description, banner }) => {
	return (
		<section className='BannerTemplate'>
			<div className='BannerTemplate-item'>
				<h2 className='BannerTemplate-h2'>{title}</h2>
				<p className='BannerTemplate-p'>{description}</p>
			</div>
			<div className='BannerTemplate-item-secondary'>
				<img src={banner} alt='' className='BannerTemplate-img' />
			</div>
		</section>
	);
};

export const ComponentBanner = () => {
	return (
		<BannerTemplate
			title={'Calculadoras porcentuales'}
			description={
				'Calcula los precios de forma sencilla y eficiente. Utiliza nuestras calculadoras para mejorar tus estrategias de precios, aplicando porcentajes de ganancia y descuentos de forma precisa. En nuestra plataforma, encontrarás cuatro calculadoras especializadas: una para productos individuales, otra para aplicar aumentos y descuentos, y dos más para gestionar precios de productos por kilo o volumen. Todo diseñado para adaptarse a tus necesidades y facilitar la gestión de tu negocio.'
			}
			banner={calculatorBanner}
		/>
	);
};
