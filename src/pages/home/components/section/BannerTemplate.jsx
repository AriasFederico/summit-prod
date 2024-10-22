import './BannerTemplate.scss';
import './ComponentBanner.scss';
import calculatorBanner from '../../../../../public/banner/calc.png';

export const BannerTemplate = ({ title, description, banner, span }) => {
	return (
		<section
			className='BannerTemplate'
			data-aos={'zoom'}
			data-aos-duration={1300}
		>
			<div className='BannerTemplate-item'>
				<span className='BannerTemplate-span'>{span}</span>
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
		<div className='ComponentBanner'>
			<BannerTemplate
				span={'CONTROL TOTAL DE LOS PRECIOS'}
				title={'Calculadoras porcentuales'}
				description={
					'Calcula los precios de forma sencilla y eficiente. Utiliza nuestras calculadoras para mejorar tus estrategias de precios, aplicando porcentajes de ganancia de forma precisa. En nuestra plataforma, encontrarás dos calculadoras especializadas: una para productos individuales y otra para gestionar precios de productos por cantidad o volumen. Todo está diseñado para adaptarse a tus necesidades y facilitar la gestión de tu negocio.'
				}
				banner={calculatorBanner}
			/>
			<BannerTemplate
				span={'OPTIMIZA TU GESTIÓN'}
				title={'Gestiona tu lista de precios'}
				description={
					'Calcula los precios de forma sencilla y eficiente. Utiliza nuestras calculadoras para mejorar tus estrategias de precios, aplicando porcentajes de ganancia y descuentos de forma precisa. En nuestra plataforma, encontrarás cuatro calculadoras especializadas: una para productos individuales, otra para aplicar aumentos y descuentos, y dos más para gestionar precios de productos por kilo o volumen. Todo diseñado para adaptarse a tus necesidades y facilitar la gestión de tu negocio.'
				}
				banner={calculatorBanner}
			/>
		</div>
	);
};
