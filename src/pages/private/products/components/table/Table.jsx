import "./Table.scss";
import { GlobalContext } from "../../../../../context/GlobalContext";
import { useContext, useEffect, useState } from "react";
import { Delete } from "../../../../../components/svg/Delete.jsx";
import { Edit } from "../../../../../components/svg/Edit.jsx";
import { collection, getDocs, getFirestore, doc } from "firebase/firestore";
import { appFirebase } from "../../../../../services/firebase/credentials.js";

const db = getFirestore(appFirebase);

export const Table = () => {
	const [list, setList] = useState([]);

	useEffect(() => {
		const getList = async () => {
			try {
				const querySnapshot = await getDocs(collection(db, "products"));
				const docs = [];

				querySnapshot.forEach((doc) => {
					docs.push({ ...doc.data(), id: doc.id });
				});

				setList(docs);
				console.log("hola");
			} catch (error) {
				console.log(error);
			}
		};

		getList();
	}, [list]);

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
