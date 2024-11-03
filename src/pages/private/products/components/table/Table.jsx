import { useEffect } from "react";
import { useGetList } from "../../hooks/useGetList";
import { Delete } from "../../../../../components/svg/Delete.jsx";
import { Edit } from "../../../../../components/svg/Edit.jsx";
import "./Table.scss";
import { useFormCalculator } from "../../../calculators/components/porcentageNormal/hooks/useFormCalculator.js";

export const Table = () => {
	const { list, getList, handleDeleteItem } = useGetList();
	const { setSubId } = useFormCalculator();

	// Llama a getList cuando el componente se monte
	useEffect(() => {
		getList();
	}, []); // Dependencias vacías para ejecutar solo al montar

	return (
		<table className="Table-table">
			<thead className="Table-thead">
				<tr>
					<th className="Table-th">Nombre del producto</th>
					<th className="Table-th">Cantidad</th>
					<th className="Table-th">($) Cantidad</th>
					<th className="Table-th">($) Unidad</th>
					<th className="Table-th">Acción</th>
				</tr>
			</thead>
			<tbody>
				{list.length > 0 ? (
					list.map((item) => (
						<tr key={item.id} className="Table-tr">
							<td>{item.name.toUpperCase()}</td>
							<td>{item.volume}</td>
							<td className="Table-td-price">$ {item.priceCant}</td>
							<td className="Table-td-price">$ {item.unity}</td>
							<td className="Table-td-action">
								<Delete
									click={() => handleDeleteItem(item.id)}
									className={"Table-delete"}
								/>
								<Edit
									className={"Table-edit"}
									click={() => setSubId(item.id)}
								/>
							</td>
						</tr>
					))
				) : (
					<tr>
						<td colSpan="5">No hay productos disponibles</td>
					</tr>
				)}
			</tbody>
		</table>
	);
};

{
	/* <div key={item.id}>
<p>{item.name}</p>
<p>{item.volume}</p>
<p>{item.priceCant}</p>
<p>{item.unity}</p>
</div> */
}
