import { useState, useEffect } from "react";

export const useFormCalculator = () => {
	// estados y manejos de estados de los margenes y el precio
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

	useEffect(() => {
		localStorage.setItem("markedCant", markedCant);
		localStorage.setItem("markedUnity", markedUnity);
	}, [markedCant, markedUnity]);

	// estado y manejo de estao del nombre del producto
	const [inputName, setInputName] = useState("");

	const handleChangeName = (e) => {
		const valueName = e.target.value;
		setInputName(valueName);
	};

	// funcion de operacion

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
			priceCant: priceWithCantPercentage,
			priceUnity: pricePerUnit,
		};
	};

	const [finalValues, setFinalValues] = useState({
		valueName: "",
		valueCant: "",
		valueUnity: "",
	});

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
			...finalValues,
			valueName: inputName,
			valueCant: priceCant.toLocaleString("de-DE"),
			valueUnity: priceUnity.toLocaleString("de-DE"),
		});
	};

	const clearForm = () => {
		setInputsValues({
			...inputsValues,
			price: "",
			quantity: "",
		});

		setInputName("");
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
	};
};
