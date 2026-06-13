import { useEffect, useState } from "react";
import { Delete } from "../../../../../components/svg/Delete.jsx";
import { Edit } from "../../../../../components/svg/Edit.jsx";
import { useFormCalculator } from "../../../calculators/components/porcentageNormal/hooks/useFormCalculator.js";
import { useGetList } from "../../hooks/useGetList";
import { Search } from "../input/Search.jsx";
import styles from './Table.module.scss'

// MUDO EL USEGETLIST AL PADRE 'APP' PARA QUE HAGA EL LLAMADO UNA VEZ MONTADA LA APP, Y LUEGO PASO LOS DATOS COMO PROP A TABLE

export const Table = () => {
	const [search, setSearch] = useState("");

	const { list, getList, handleDeleteItem } = useGetList();
	const { setSubId } = useFormCalculator();
	// Llama a getList cuando el componente se monte
	useEffect(() => {
		getList();
	}, []); // Dependencias vacías para ejecutar solo al montar

	const filteredList = list.filter((item) =>
		item.name.toLowerCase().includes(search.toLowerCase()),
	);

	const displayList = filteredList ? filteredList : list;

	const contentTable = {
		th: ['Producto', 'Costo total', 'Costo unidad', 'Ganancia Neta', 'Marcado']
	}
	const { th } = contentTable;

	return (
		<>
			<Search
				placeholder={"Buscar producto"}
				value={search}
				change={(e) => setSearch(e.target.value)}
			/>
			<p>{displayList.length}
			</p>
			<table className={styles.table}>
				<thead className={styles.thead}>
					<tr>
						{th?.map((e) => <th key={e} className={styles.th}>{e}</th>)}
					</tr>
				</thead>
				<tbody>
					{displayList.length > 0 ? (
						displayList.map((item) => (
							<tr key={item.id} className={styles.tr}>
								<td>{item.name}</td>
								<td className="Table-td-price">$ {item.priceCant} -</td>
								<td className="Table-td-price">$ {item.unity}</td>
								{/* <td className="Table-td-action"></td> */}
								<td className="Table-td-action">$</td>
								<td className="Table-td-action">%</td>
							</tr>
						))
					) : (
						<tr>
							<td colSpan="5">No hay productos disponibles</td>
						</tr>
					)}
				</tbody>
			</table>
		</>
	);
};


// {/* <Delete
// 	click={() => handleDeleteItem(item.id)}
// 	className={"Table-delete"}
// />
// <Edit
// 	click={() => setSubId(item.id)}
// 	className={"Table-edit"}
// /> */}
// LEER: deberia hacer dos tablas, una que renderice mobile y otra pc