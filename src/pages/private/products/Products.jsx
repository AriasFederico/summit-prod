import "./Products.scss";
import { Search } from "./components/input/Search";
export const Products = () => {
	// crear una media para que la lista pueda imprimirse !!!!!

	return (
		<div className="Products">
			<div className="Products-list">
				<div className="Products-header">
					<HeaderProducts title={"Lista de productos (cantidad / volumen)"} />
					<Search placeholder={"Buscar productos"} />
				</div>
			</div>

			<div className="Products-list-single">
				<div className="Products-header">
					<HeaderProducts title={"Lista de productos indivuales"} />
					<Search placeholder={"Buscar productos individuales"} />
				</div>
			</div>
		</div>
	);
};

export const HeaderProducts = ({ title }) => {
	return <h1 className="Products-title">{title}</h1>;
};
