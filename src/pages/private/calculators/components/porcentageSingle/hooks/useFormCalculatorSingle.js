import { useEffect, useState } from "react";
import { appFirebase } from "../../../../../../services/firebase/credentials";
import { useContext } from "react";
import { GlobalContext } from "../../../../../../context/GlobalContext";
import {
	getFirestore,
	collection,
	addDoc,
	getDocs,
	doc,
	deleteDoc,
	getDoc,
} from "firebase/firestore";

const db = getFirestore(appFirebase);

export const useFormCalculatorSingle = () => {
	const { exit, setExit } = useContext(GlobalContext);
	// estado y manejo de estados del margen y el precio
	const [inputsValues, setInputsValues] = useState({
		markedProduct: localStorage.getItem("markedProduct") || "",
		price: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;

		setInputsValues({
			...inputsValues,
			[name]: value ? Number(value) : "",
		});
	};

	useEffect(() => {
		localStorage.setItem("markedProduct", inputsValues.markedProduct);
	}, [inputsValues.markedProduct]);

	// estado y manejo de estado del nombre del producto

	const [inputName, setInputName] = useState("");

	const handleChangeName = (e) => {
		const valueName = e.target.value;
		setInputName(valueName);
	};

	const calculatePercentageSingle = (markedProduct, price) => {
		const toPercentage = (value) => parseFloat(value / 100);
		const toNumber = (value) => parseFloat(value);

		const priceNumber = toNumber(price);

		const percentageProduct = toPercentage(markedProduct);

		const priceWithProductPercentage = priceNumber * (1 + percentageProduct);

		return priceWithProductPercentage;
	};

	const [finalValues, setFinalValues] = useState({
		valueName: "",
		valueProduct: "",
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (inputsValues.price === "") return;
		const priceWithProductPercentage = calculatePercentageSingle(
			inputsValues.markedProduct,
			inputsValues.price,
		);

		setFinalValues({
			...finalValues,
			valueName: inputName,
			valueProduct: priceWithProductPercentage.toLocaleString("de-DE"),
		});
	};

	const addData = async () => {
		try {
			const dataToAdd = {
				name: finalValues.valueName, // Asegúrate de que esto no sea undefined
				cant: finalValues.valueProduct, // Asegúrate de que esto sea un string válido
			};
			console.log("Datos a enviar: ", dataToAdd);

			await addDoc(collection(db, "singleProducts"), dataToAdd);
			setExit(true);

			setTimeout(() => {
				setExit(false);
			}, 3000);

			setFinalValues({
				valueCant: "",
				valueUnity: "",
			});
			clearForm();
		} catch (error) {
			console.error(
				"Error al agregar el documento: ",
				error.code,
				error.message,
			);
		}
	};

	const clearForm = () => {
		setInputsValues({
			...inputsValues,
			price: "",
		});

		setInputName("");
	};

	return {
		handleChange,
		handleChangeName,
		handleSubmit,
		clearForm,
		inputName,
		inputsValues,
		finalValues,
		addData,
	};
};
