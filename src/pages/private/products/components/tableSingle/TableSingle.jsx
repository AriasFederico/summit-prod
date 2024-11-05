import { Search } from "../input/Search";
import { useEffect, useState } from "react";
import { useGetListSingle } from "../../hooks/useGetListSingle";
import { Delete } from "../../../../../components/svg/Delete";
import { Edit } from "../../../../../components/svg/Edit";
import { useFormCalculatorSingle } from "../../../calculators/components/porcentageSingle/hooks/useFormCalculatorSingle";
export const TableSingle = () => {
	const { products, handleDeleteItem, getListSingle } = useGetListSingle();
	const { setSubId } = useFormCalculatorSingle();

	const [search, setSearch] = useState("");

	useEffect(() => {
		getListSingle();
	}, []); // Dependencias vacías para ejecutar solo al montar

	const filteredList = products.filter((item) =>
		item.name.toLowerCase().includes(search.toLowerCase()),
	);

	const displayList = filteredList ? filteredList : products;

	return (
		<>
			<Search
				placeholder={"Buscar producto"}
				value={search}
				change={(e) => setSearch(e.target.value)}
			/>

			{/* funcion que dependiendo de el valor de search haga el filtro a la lista */}

			<table className="Table-table">
				<thead className="Table-thead">
					<tr>
						<th className="Table-th">Nombre del producto</th>
						<th className="Table-th">($) Precio</th>
						<th className="Table-th">Acción</th>
					</tr>
				</thead>
				<tbody className="Table-tdbody">
					{displayList.length > 0 ? (
						displayList.map((item) => (
							<tr key={item.id} className="Table-tr">
								<td>{item.name.toUpperCase()}</td>
								<td className="Table-td-price"> $ {item.cant}</td>
								<td className="Table-td-action">
									<Delete
										className={"Table-delete"}
										click={() => handleDeleteItem(item.id)}
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
							<td colSpan="3">No hay productos disponibles</td>
						</tr>
					)}
				</tbody>
			</table>
		</>
	);
};
