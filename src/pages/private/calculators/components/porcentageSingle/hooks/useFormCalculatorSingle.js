import { useEffect, useState } from "react";
import { appFirebase } from "../../../../../../services/firebase/credentials";
import { useContext } from "react";
import { GlobalContext } from "../../../../../../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import {
	getFirestore,
	collection,
	addDoc,
	getDocs,
	doc,
	deleteDoc,
	getDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useGetListSingle } from "../../../../products/hooks/useGetListSingle";
const db = getFirestore(appFirebase);

export const useFormCalculatorSingle = () => {
	const redirect = useNavigate();
	const { handleDeleteItem } = useGetListSingle();
	const [subId, setSubId] = useState("");
	const { exit, setExit } = useContext(GlobalContext);
	const auth = getAuth();

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

	const [inputNameSingle, setInputNameSingle] = useState(
		localStorage.getItem("inputNameSingle") || "",
	);

	const handleChangeName = (e) => {
		const valueName = e.target.value;
		setInputNameSingle(valueName);
		localStorage.setItem("inputNameSingle", valueName);
	};

	const calculatePercentageSingle = (markedProduct, price) => {
		const toPercentage = (value) => parseFloat(value / 100);
		const toNumber = (value) => parseFloat(value);

		const priceNumber = toNumber(price);

		const percentageProduct = toPercentage(markedProduct);

		const priceWithProductPercentage = priceNumber * (1 + percentageProduct);

		return Math.ceil(priceWithProductPercentage);
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
			valueName: inputNameSingle,
			valueProduct: priceWithProductPercentage.toLocaleString("de-DE"),
		});
	};

	const addData = async () => {
		try {
			const user = auth.currentUser;

			const dataToAdd = {
				name: finalValues.valueName, // Asegúrate de que esto no sea undefined
				cant: finalValues.valueProduct, // Asegúrate de que esto sea un string válido
				userId: user.uid,
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

	const getOne = async (id) => {
		try {
			const docRef = doc(db, "singleProducts", id);
			const docSnap = await getDoc(docRef);
			const data = docSnap.data();

			if (data) {
				console.log(data.name);
				setInputNameSingle(data.name);
				localStorage.setItem("inputNameSingle", data.name); // Guardar en `localStorage`
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

	const clearForm = () => {
		setInputsValues({
			...inputsValues,
			price: "",
		});

		inputNameSingle("");
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
