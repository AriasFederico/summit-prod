import { getAuth } from 'firebase/auth';
import {
	addDoc,
	collection,
	doc,
	getDoc,
	getFirestore,
} from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../../../../../context/GlobalContext';
import { appFirebase } from '../../../../../../services/firebase/credentials';

const db = getFirestore(appFirebase);

export const useFormCalculator = () => {
	const { getList, handleDeleteItem } = useContext(GlobalContext);
	const redirect = useNavigate();
	const [subId, setSubId] = useState('');
	const auth = getAuth();

	// Estados para los valores de porcentaje y precio
	const [inputsValues, setInputsValues] = useState({
		markedCant: localStorage.getItem('markedCant'),
		markedUnity: localStorage.getItem('markedUnity'),
		price: '',
		quantity: '',
	});

	const { markedCant, markedUnity, price, quantity } = inputsValues;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setInputsValues({
			...inputsValues,
			[name]: value ? Number(value) : '',
		});
	};

	// Guardar cambios de porcentaje en `localStorage`
	useEffect(() => {
		localStorage.setItem('markedCant', markedCant);
		localStorage.setItem('markedUnity', markedUnity);
	}, [markedCant, markedUnity]);

	// Estado para el nombre del producto
	const [inputName, setInputName] = useState(
		localStorage.getItem('inputName') || '',
	);

	const handleChangeName = (e) => {
		const valueName = e.target.value;
		setInputName(valueName);
		localStorage.setItem('inputName', valueName); // Guardar el nombre en `localStorage`
	};

	// Función para calcular porcentaje
	const calculatePorcentage = (markedCant, markedUnity, price, cant) => {
		const toPercentage = (value) => Number.parseFloat(value / 100);
		const toNumber = (value) => Number.parseFloat(value);
		const cantPercentage = toPercentage(markedCant);
		const unityPercentage = toPercentage(markedUnity);
		const priceNumber = toNumber(price);
		const quantity = toNumber(cant);
		const priceWithCantPercentage = priceNumber * (1 + cantPercentage);
		if (!markedUnity) return priceWithCantPercentage;

		const priceWithUnityPercentage = priceNumber * (1 + unityPercentage);
		const pricePerUnit = priceWithUnityPercentage / quantity;

		return {
			priceCant: priceWithCantPercentage.toLocaleString('de-DE'),
			priceUnity: Math.ceil(pricePerUnit),
		};
	};

	// Estado para valores finales
	const [finalValues, setFinalValues] = useState({
		valueName: '',
		valueCant: '',
		valueUnity: '',
		marked: '',
		quantity: '',
	});

	// Manejador de envío de formulario
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (price === '') return;
		const { priceCant, priceUnity } = calculatePorcentage(
			markedCant,
			markedUnity,
			price,
			quantity,
		);

		setFinalValues({
			valueName: inputName,
			valueCant: priceCant,
			valueUnity: priceUnity,
			quantity: quantity,
		});
	};

	// Función para agregar datos a Firestore
	const addData = async () => {
		try {
			const user = auth.currentUser;

			if (!user) {
				console.error('Usuario no autenticado');
				return;
			}
			const nameProduct =
				finalValues.valueName[0].toUpperCase() + finalValues.valueName.slice(1);
			const dataToAdd = {
				name: `${nameProduct} (${finalValues.quantity})`,
				volume: inputsValues.quantity,
				priceCant: finalValues.valueCant,
				unity: finalValues.valueUnity,
				userId: user.uid,
				marked: `%${markedCant} - %${markedUnity}`,
				// ACA AGEGAR LO QUE TIENE LA CALCULADORA SINGLE
			};

			await addDoc(collection(db, 'products'), dataToAdd);
			await getList();
		} catch (error) {
			console.error(
				'Error al agregar el documento:',
				error.code,
				error.message,
			);
		} finally {
			setFinalValues({
				valueCant: '',
				valueUnity: '',
			});
			clearForm();
		}
	};

	// Obtener un documento de Firestore
	const getOne = async (id) => {
		try {
			const docRef = doc(db, 'products', id);
			const docSnap = await getDoc(docRef);
			const data = docSnap.data();

			if (data) {
				console.log(data.name);
				setInputName(data.name);
				localStorage.setItem('inputName', data.name); // Guardar en `localStorage`
				handleDeleteItem(id);
				redirect('../calculators');
			}
		} catch (error) {
			console.log(error);
		} finally {
			await getList();
		}
	};

	// Cargar el nombre del producto si `subId` cambia
	useEffect(() => {
		if (subId !== '') {
			getOne(subId);
		}
	}, [subId]);

	// Limpiar formulario
	const clearForm = () => {
		setInputsValues({
			...inputsValues,
			price: '',
			quantity: '',
		});
		setInputName('');
		localStorage.removeItem('inputName'); // Limpiar `localStorage`
	};

	return {
		handleSubmit,
		markedCant,
		markedUnity,
		price,
		inputName,
		quantity,
		handleChange,
		handleChangeName,
		finalValues,
		clearForm,
		addData,
		setSubId,
		getOne,
	};
};
