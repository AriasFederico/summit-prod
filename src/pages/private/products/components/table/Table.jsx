import "./Table.scss";
import { GlobalContext } from "../../../../../context/GlobalContext";
import { useContext } from "react";
import { Delete } from "../../../../../components/svg/Delete.jsx";
import { Edit } from "../../../../../components/svg/Edit.jsx";

export const Table = () => {
	const { list } = useContext(GlobalContext);
	return (
		<table className="Table">
			<thead className="Table-thead">
				<tr className="Table">
					<th className="Table-th">Nombre del producto</th>
					<th className="Table-th">Cantidad</th>
					<th className="Table-th">($) Cantidad</th>
					<th className="Table-th">($) Unidad</th>
					<th className="Table-th">Acción</th>
				</tr>
			</thead>
			<tbody className="Table-tbody">
				{list &&
					list.map((item, index) => (
						<tr key={index} className="Table-tr">
							<td className="Table-td-name">{item.name.toUpperCase()}</td>
							<td>{item.volume}</td>
							<td className="Table-td-cantValue">$ {item.priceCant}</td>
							<td className="Table-td-unityValue">$ {item.unity}</td>
							<td className="Table-td-action">
								<Delete className={"Table-svg Table-delete"} />
								<Edit className={"Table-svg Table-update"} />
							</td>
						</tr>
					))}
			</tbody>
		</table>
	);
};
