import { useEffect, useState } from "react";

export const useFormCalculatorSingle = () => {
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

	const handleSubmit = (e) => {
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
	};
};
