import "./LastSection.scss";
import { Link } from "react-router-dom";
export const LastSection = () => {
	return (
		<section
			className="LastSection"
			data-aos={"fade-up"}
			data-aos-duration={1500}
		>
			<h3 className="LastSection-h3">Transforma tu gestión en minutos</h3>
			<p className="LastSection-p">
				Con Pricify, lleva el control de tus precios, optimiza tus márgenes de
				ganancia y simplifica la gestión de tu negocio. Disfruta de una
				plataforma fácil de usar, diseñada para adaptarse a tus necesidades y
				ayudarte a alcanzar tus objetivos. ¡Anímate a empezar y descubre cómo
				Pricify puede transformar tu negocio!
			</p>
			<Link to={"/registrarse"} className="LastSection-link">
				Comenzar
			</Link>
		</section>
	);
};
