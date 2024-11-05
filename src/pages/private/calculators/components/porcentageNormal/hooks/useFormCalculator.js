import { useState, useEffect, useContext } from "react";
import { appFirebase } from "../../../../../../services/firebase/credentials";
import { getAuth } from "firebase/auth";
import { GlobalContext } from "../../../../../../context/GlobalContext";
import {
	getFirestore,
	collection,
	addDoc,
	getDoc,
	doc,
} from "firebase/firestore";
import { useGetList } from "../../../../products/hooks/useGetList";
import { useNavigate } from "react-router-dom";

const db = getFirestore(appFirebase);

export const useFormCalculator = () => {
	const redirect = useNavigate();
	const { handleDeleteItem } = useGetList();
	const [subId, setSubId] = useState("");
	const { setExit } = useContext(GlobalContext);
	const auth = getAuth();

	// Estados para los valores de porcentaje y precio
	const [inputsValues, setInputsValues] = useState({
		markedCant: localStorage.getItem("markedCant") || "",
		markedUnity: localStorage.getItem("markedUnity") || "",
		price: "",
		quantity: "",
	});

	const { markedCant, markedUnity, price, quantity } = inputsValues;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setInputsValues({
			...inputsValues,
			[name]: value ? Number(value) : "",
		});
	};

	// Guardar cambios de porcentaje en `localStorage`
	useEffect(() => {
		localStorage.setItem("markedCant", markedCant);
		localStorage.setItem("markedUnity", markedUnity);
	}, [markedCant, markedUnity]);

	// Estado para el nombre del producto
	const [inputName, setInputName] = useState(
		localStorage.getItem("inputName") || "",
	);

	const handleChangeName = (e) => {
		const valueName = e.target.value;
		setInputName(valueName);
		localStorage.setItem("inputName", valueName); // Guardar el nombre en `localStorage`
	};

	// Función para calcular porcentaje
	const calculatePorcentage = (markedCant, markedUnity, price, cant) => {
		const toPercentage = (value) => parseFloat(value / 100);
		const toNumber = (value) => parseFloat(value);
		const cantPercentage = toPercentage(markedCant);
		const unityPercentage = toPercentage(markedUnity);
		const priceNumber = toNumber(price);
		const quantity = toNumber(cant);

		const priceWithCantPercentage = priceNumber * (1 + cantPercentage);

		if (!markedUnity) return priceWithCantPercentage;

		const priceWithUnityPercentage = priceNumber * (1 + unityPercentage);
		const pricePerUnit = priceWithUnityPercentage / quantity;
		return {
			priceCant: priceWithCantPercentage.toLocaleString("de-DE"),
			priceUnity: Math.ceil(pricePerUnit),
		};
	};

	// Estado para valores finales
	const [finalValues, setFinalValues] = useState({
		valueName: "",
		valueCant: "",
		valueUnity: "",
	});

	// Manejador de envío de formulario
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (price === "") return;
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
		});
	};

	// Función para agregar datos a Firestore
	const addData = async () => {
		try {
			const user = auth.currentUser;

			if (!user) {
				console.error("Usuario no autenticado");
				return;
			}
			const dataToAdd = {
				name: finalValues.valueName,
				volume: inputsValues.quantity,
				priceCant: finalValues.valueCant,
				unity: finalValues.valueUnity,
				userId: user.uid,
			};

			await addDoc(collection(db, "products"), dataToAdd);

			setExit(true);
			setTimeout(() => {
				setExit(false);
			}, 3000);

			clearForm();
		} catch (error) {
			console.error(
				"Error al agregar el documento:",
				error.code,
				error.message,
			);
		}
	};

	// Obtener un documento de Firestore
	const getOne = async (id) => {
		try {
			const docRef = doc(db, "products", id);
			const docSnap = await getDoc(docRef);
			const data = docSnap.data();

			if (data) {
				console.log(data.name);
				setInputName(data.name);
				localStorage.setItem("inputName", data.name); // Guardar en `localStorage`
				handleDeleteItem(id);
				redirect("../calculators");
			}
		} catch (error) {
			console.log(error);
		}
	};

	// Cargar el nombre del producto si `subId` cambia
	useEffect(() => {
		if (subId !== "") {
			getOne(subId);
		}
	}, [subId]);

	// Limpiar formulario
	const clearForm = () => {
		setInputsValues({
			...inputsValues,
			price: "",
			quantity: "",
		});
		setInputName("");
		localStorage.removeItem("inputName"); // Limpiar `localStorage`
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
