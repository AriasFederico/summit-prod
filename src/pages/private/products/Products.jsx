import "./Products.scss";
import { Search } from "./components/input/Search";
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
export const Products = () => {
	const { list } = useContext(GlobalContext);
	// crear una media para que la lista pueda imprimirse !!!!!

	return (
		<div className="Products">
			<div className="Products-list">
				<div className="Products-header">
					<HeaderProducts title={"Lista de productos (cantidad / volumen)"} />
					<Search placeholder={"Buscar productos"} />
				</div>
			</div>

			{list &&
				list.map((list) => (
					<div key={list.id}>
						<p>{list.name}</p>
						<p>{list.cant}</p>
						<p>{list.price}</p>
					</div>
				))}

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
