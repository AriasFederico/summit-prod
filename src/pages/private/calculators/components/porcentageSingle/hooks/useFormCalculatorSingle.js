import { getAuth } from 'firebase/auth';
import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	getFirestore,
} from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../../../../../context/GlobalContext';
import { appFirebase } from '../../../../../../services/firebase/credentials';
// import { useGetListSingle } from '../../../../products/hooks/useGetListSingle';
const db = getFirestore(appFirebase);

export const useFormCalculatorSingle = () => {
	const { getList } = useContext(GlobalContext);
	const redirect = useNavigate();
	// const { handleDeleteItem } = useGetListSingle();
	const [subId, setSubId] = useState('');
	const auth = getAuth();

	// estado y manejo de estados del margen y el precio
	const [inputsValues, setInputsValues] = useState({
		markedProduct: localStorage.getItem('markedProduct') || '',
		price: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;

		setInputsValues({
			...inputsValues,
			[name]: value ? Number(value) : '',
		});
	};

	useEffect(() => {
		localStorage.setItem('markedProduct', inputsValues.markedProduct);
	}, [inputsValues.markedProduct]);

	// estado y manejo de estado del nombre del producto

	const [inputNameSingle, setInputNameSingle] = useState(
		localStorage.getItem('inputNameSingle') || '',
	);

	const handleChangeName = (e) => {
		const valueName = e.target.value;
		setInputNameSingle(valueName);
		localStorage.setItem('inputNameSingle', valueName);
	};

	const calculatePercentageSingle = (markedProduct, price) => {
		const toPercentage = (value) => Number.parseFloat(value / 100);
		const toNumber = (value) => Number.parseFloat(value);

		const priceNumber = toNumber(price);

		const percentageProduct = toPercentage(markedProduct);

		const priceWithProductPercentage = priceNumber * (1 + percentageProduct);

		return Math.ceil(priceWithProductPercentage);
	};

	const [finalValues, setFinalValues] = useState({
		valueName: '',
		valueCant: '',
		marked: '',
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (inputsValues.price === '') return;
		const priceWithProductPercentage = calculatePercentageSingle(
			inputsValues.markedProduct,
			inputsValues.price,
		);

		setFinalValues({
			...finalValues,
			valueName: inputNameSingle,
			valueCant: priceWithProductPercentage.toLocaleString('de-DE'),
			marked: inputsValues.markedProduct,
		});
	};

	const addData = async () => {
		try {
			const user = auth.currentUser;

			const dataToAdd = {
				name: finalValues.valueName, // Asegúrate de que esto no sea undefined
				unity: finalValues.valueCant, // Asegúrate de que esto sea un string válido
				userId: user.uid,
				marked: `%${inputsValues.markedProduct}`,
			};
			console.log('Datos a enviar: ', dataToAdd);

			await addDoc(collection(db, 'products'), dataToAdd);

			setTimeout(() => {}, 3000);
			await getList();
		} catch (error) {
			console.error(
				'Error al agregar el documento: ',
				error.code,
				error.message,
			);
		} finally {
			setFinalValues({
				valueName: '',
				valueCant: '',
			});
			clearForm();
		}
	};

	// Cargar el nombre del producto si `subId` cambia
	useEffect(() => {
		if (subId !== '') {
			getOne(subId);
		}
	}, [subId]);

	const clearForm = () => {
		setInputsValues({
			...inputsValues,
			price: '',
		});
		setInputNameSingle('');
	};

	return {
		handleChange,
		handleChangeName,
		handleSubmit,
		clearForm,
		inputNameSingle,
		inputsValues,
		finalValues,
		addData,
		setSubId,
	};
};
