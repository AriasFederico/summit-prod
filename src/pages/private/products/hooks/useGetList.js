import { getAuth } from 'firebase/auth';
import {
	collection,
	deleteDoc,
	doc,
	getDocs,
	getFirestore,
	query,
	where,
} from 'firebase/firestore';
import { useState } from 'react';
import { appFirebase } from '../../../../services/firebase/credentials';
const db = getFirestore(appFirebase);

export const useGetList = () => {
	const [list, setList] = useState([]);

	const getList = async () => {
		try {
			const auth = getAuth();
			const user = auth.currentUser;
			if (!user) {
				return;
			}
			const q = query(
				collection(db, 'products'),
				where('userId', '==', user.uid),
			);
			const querySnapshot = await getDocs(q);
			const docs = [];
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});

			setList(docs);
		} catch (error) {
			console.log(error);
		}
	};

	const handleDeleteItem = async (id) => {
		try {
			// Crear una referencia al documento
			const docRef = doc(db, 'products', id);
			await deleteDoc(docRef); // Pasar la referencia al documento
			await getList();
		} catch (error) {
			console.error('Error al eliminar el documento: ', error);
		}
	};
	return {
		list,
		getList,
		handleDeleteItem,
	};
};
