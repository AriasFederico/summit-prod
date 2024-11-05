import "./Products.scss";
import { Table } from "../products/components/table/Table.jsx";
import { TableSingle } from "./components/tableSingle/TableSingle.jsx";
export const Products = () => {
	return (
		<div className="Products">
			<div className="Products-list">
				<HeaderProducts title={"Lista de productos (cantidad / volumen)"} />
				<Table />
			</div>

			<div className="Products-list">
				<HeaderProducts title={"Lista de productos indivuales"} />
				<TableSingle />
			</div>
		</div>
	);
};

export const HeaderProducts = ({ title }) => {
	return <h1 className="Products-title">{title}</h1>;
};
