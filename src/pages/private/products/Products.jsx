import "./Products.scss";
import { Search } from "./components/input/Search";
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import { Table } from "./components/table/Table";
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
				<Table list={list} />
			</div>

			{/* tabla({props}) */}

			<div className="Products-list">
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
