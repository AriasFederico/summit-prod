import "./BannerTemplate.scss";
import "./ComponentBanner.scss";
import calculatorBanner from "../../../../../public/banner/calculators.png";
import productBanner from "../../../../../public/banner/products.png";

export const BannerTemplate = ({ title, description, banner, span }) => {
	return (
		<section
			className="BannerTemplate"
			data-aos={"zoom"}
			data-aos-duration={1300}
		>
			<div className="BannerTemplate-item">
				<span className="BannerTemplate-span">{span}</span>
				<h2 className="BannerTemplate-h2">{title}</h2>
				<p className="BannerTemplate-p">{description}</p>
			</div>
			<div className="BannerTemplate-item-secondary">
				<img src={banner} alt="" className="BannerTemplate-img" />
			</div>
		</section>
	);
};

export const ComponentBanner = () => {
	return (
		<div className="ComponentBanner">
			<BannerTemplate
				span={"CONTROL TOTAL DE LOS PRECIOS"}
				title={"Calculadoras porcentuales"}
				description={
					"Calcula los precios de forma sencilla y eficiente. Utiliza nuestras calculadoras para mejorar tus estrategias de precios, aplicando porcentajes de ganancia de forma precisa. En nuestra plataforma, encontrarás dos calculadoras especializadas: una para productos individuales y otra para gestionar precios de productos por cantidad o volumen. Todo está diseñado para adaptarse a tus necesidades y facilitar la gestión de tu negocio."
				}
				banner={calculatorBanner}
			/>
			<BannerTemplate
				span={"OPTIMIZA TU GESTIÓN"}
				title={"Gestiona tu lista de precios"}
				description={
					"Mantén un registro organizado de tus productos y precios, y accede a ellos de manera rápida y precisa. Con Pricify, puedes almacenar productos con precios por volumen o individuales y gestionarlos en una lista accesible desde cualquier dispositivo. Solo necesitas iniciar sesión en tu cuenta para administrar tus precios de manera eficiente, sin importar dónde te encuentres."
				}
				banner={productBanner}
			/>
		</div>
	);
};
