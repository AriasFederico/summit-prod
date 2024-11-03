import { useState } from "react";
import {
	collection,
	deleteDoc,
	getDocs,
	doc,
	getFirestore,
	query,
	where,
} from "firebase/firestore";
import { appFirebase } from "../../../../services/firebase/credentials";
import { getAuth } from "firebase/auth";
const db = getFirestore(appFirebase);

export const useGetList = () => {
	const [list, setList] = useState([]);

	const getList = async () => {
		try {
			const auth = getAuth();
			const user = auth.currentUser;
			console.log("Usuario actual:", user); // Agrega este log

			if (!user) {
				console.log("Usuario no autenticado");
				return;
			}

			const q = query(
				collection(db, "products"),
				where("userId", "==", user.uid),
			);
			const querySnapshot = await getDocs(q);
			const docs = [];
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});

			setList(docs);
			console.log("Productos del usuario:", docs);
		} catch (error) {
			console.log(error);
		}
	};

	const handleDeleteItem = async (id) => {
		try {
			// Crear una referencia al documento
			const docRef = doc(db, "products", id);
			await deleteDoc(docRef); // Pasar la referencia al documento
			getList(); // Volver a obtener la lista
		} catch (error) {
			console.error("Error al eliminar el documento: ", error);
		}
	};
	return {
		list,
		getList,
		handleDeleteItem,
	};
};
