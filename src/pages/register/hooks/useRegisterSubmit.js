import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

import { useState } from 'react';
import { appFirebase } from '../../../services/firebase/credentials';
const auth = getAuth(appFirebase);

export const useRegisterSubmit = (values, resetForm) => {
	const [error, setError] = useState(false);
	const [successful, setSuccessful] = useState(false);

	const showError = () => {
		setError(true);
		setTimeout(() => {
			setError(false);
		}, 3000);
	};

	const showMessageSuccessful = () => {
		setSuccessful(true);
		setTimeout(() => {
			setSuccessful(false);
		}, 5000);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		// Validación de ejemplo: verificar longitud mínima de la contraseña
		if (values.password.length < 8) {
			showError();
			return;
		}

		try {
			await createUserWithEmailAndPassword(auth, values.email, values.password);
			console.log('Registro exitoso:', values);
			resetForm();
			showMessageSuccessful();

			// setError(null); // Limpiar error si existía
		} catch (err) {
			console.log(err);
		}
	};

	return { handleSubmit, error, successful };
};
