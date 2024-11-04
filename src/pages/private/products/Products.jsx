import "./Products.scss";
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import { Table } from "../products/components/table/Table.jsx";
export const Products = () => {
	const { list } = useContext(GlobalContext);
	// crear una media para que la lista pueda imprimirse !!!!!

	return (
		<div className="Products">
			<div className="Products-list">
				<HeaderProducts title={"Lista de productos (cantidad / volumen)"} />
				<Table list={list} />
			</div>

			<div className="Products-list">
				<HeaderProducts title={"Lista de productos indivuales"} />
			</div>
		</div>
	);
};

export const HeaderProducts = ({ title }) => {
	return <h1 className="Products-title">{title}</h1>;
};
