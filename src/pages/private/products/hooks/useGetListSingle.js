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

export const useGetListSingle = () => {
	const [products, setProducts] = useState([]);

	const getListSingle = async () => {
		try {
			const auth = getAuth();
			const user = auth.currentUser;
			console.log("Usuario actual:", user); // Agrega este log

			if (!user) {
				console.log("Usuario no autenticado");
				return;
			}

			const q = query(
				collection(db, "singleProducts"),
				where("userId", "==", user.uid),
			);
			const querySnapshot = await getDocs(q);
			const docs = [];
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setProducts(docs);
			console.log("Productos del usuario:", docs);
		} catch (error) {
			console.log(error);
		}
	};

	const handleDeleteItem = async (id) => {
		try {
			// Crear una referencia al documento
			const docRef = doc(db, "singleProducts", id);
			await deleteDoc(docRef); // Pasar la referencia al documento
			getListSingle(); // Volver a obtener la lista
		} catch (error) {
			console.error("Error al eliminar el documento: ", error);
		}
	};

	return {
		products,
		getListSingle,
		handleDeleteItem,
	};
};
