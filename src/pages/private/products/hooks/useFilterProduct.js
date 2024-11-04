import { useState } from "react";

export const useFilterProduct = ({ list }) => {
	const [search, setSearch] = useState("");

	const filteredData = list.filter((item) =>
		item.name.toLowerCase().includes(search.toLowerCase()),
	);

	return {
		search,
		setSearch,
		filteredData,
	};
};
