import { useEffect, useState } from "react";
import { useGetList } from "../../hooks/useGetList";
import { Delete } from "../../../../../components/svg/Delete.jsx";
import { Edit } from "../../../../../components/svg/Edit.jsx";
import "./Table.scss";
import { useFormCalculator } from "../../../calculators/components/porcentageNormal/hooks/useFormCalculator.js";
import { Search } from "../input/Search.jsx";

export const Table = () => {
	const { list, getList, handleDeleteItem } = useGetList();
	const { setSubId } = useFormCalculator();

	const [search, setSearch] = useState("");
	// Llama a getList cuando el componente se monte
	useEffect(() => {
		getList();
	}, []); // Dependencias vacías para ejecutar solo al montar

	const filteredList = list.filter((item) =>
		item.name.toLowerCase().includes(search.toLowerCase()),
	);

	const displayList = filteredList ? filteredList : list;

	return (
		<>
			<Search
				placeholder={"BUSCAR PRODUCTO"}
				value={search}
				change={(e) => setSearch(e.target.value)}
			/>

			{/* funcion que dependiendo de el valor de search haga el filtro a la lista */}

			<table className="Table-table">
				<thead className="Table-thead">
					{/* en contexto agregar los titulos para hacer un mapeo */}
					<tr>
						<th className="Table-th">Nombre del producto</th>
						<th className="Table-th">Cantidad</th>
						<th className="Table-th">($) Cantidad</th>
						<th className="Table-th">($) Unidad</th>
						<th className="Table-th">Acción</th>
					</tr>
				</thead>
				<tbody className="Table-tdbody">
					{displayList.length > 0 ? (
						displayList.map((item) => (
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
										click={() => setSubId(item.id)}
										className={"Table-edit"}
									/>
								</td>
							</tr>
						))
					) : (
						<tr>
							<td colSpan="5">No hay productos disponibles</td>
						</tr>
					)}{" "}
				</tbody>
			</table>
		</>
	);
};
