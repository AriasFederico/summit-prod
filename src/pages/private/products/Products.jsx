import { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import { useFormCalculator } from "../calculators/components/porcentageNormal/hooks/useFormCalculator";
import styles from './Products.module.scss'
import { Table } from "./components";
import { Search } from "./components/input/Search";

export const Products = () => {
	const { list, handleDeleteItem } = useContext(GlobalContext);
	const [search, setSearch] = useState("");
	const { setSubId } = useFormCalculator();
	const filteredList = list.filter((item) =>
		item.name.toLowerCase().includes(search.toLowerCase()),
	);
	const displayList = filteredList ? filteredList : list;


	// useEffect escuchando el tamaño del viewport

	return (
		<div className={styles.produtcs}>
			<Search
				placeholder={"Buscar producto"}
				value={search}
				change={(e) => setSearch(e.target.value)}
			/>
			<p className={styles.length}>{displayList.length} Productos encontrados</p>
			{/* condicional escuchando el viewport */}
			<Table list={displayList} deleteItem={handleDeleteItem} edit={setSubId} />
		</div>
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