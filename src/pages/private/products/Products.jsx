import "./Products.scss";
import { Table } from "../products/components/table/Table.jsx";
export const Products = () => {

	// useEffect escuchando el tamaño del viewport

	return (
		<div className="Products">
			<Table />
			{/* <TableMobile/> renderizado condicional */}
		</div>
	);
};