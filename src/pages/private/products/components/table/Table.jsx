import "./Table.scss";
import { GlobalContext } from "../../../../../context/GlobalContext";
import { useContext } from "react";

export const Table = () => {
	const { list } = useContext(GlobalContext);
	return (
		<table className="Table">
			<thead className="Table-thead">
				<tr className="Table">
					<th className="Table-th">Producto</th>
					<th className="Table-th">Cantidad</th>
					<th className="Table-th">($) Cantidad</th>
					<th className="Table-th">($) Unidad</th>
					<th className="Table-th">Acción</th>
				</tr>
			</thead>
			<tbody>
				{list &&
					list.map((item, index) => (
						<tr key={index} className="Table-tr">
							<td className="Table-td-name">{item.name.toUpperCase()}</td>
							<td>{item.volume}</td>
							<td>$ {item.priceCant}</td>
							<td>$ {item.unity}</td>
						</tr>
					))}
			</tbody>
		</table>
	);
};
