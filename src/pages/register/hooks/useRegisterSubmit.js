import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../../context/GlobalContext';
import { appFirebase } from '../../../services/firebase/credentials';
const auth = getAuth(appFirebase);

export const useRegisterSubmit = (values) => {
	const redirect = useNavigate();
	const { setLogged, setUser } = useContext(GlobalContext);
	const [error, setError] = useState(false);
	const [successful, setSuccessful] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();
		setError(false);

		if (values.password.length < 8) {
			setError(true);
			return;
		}

		try {
			await createUserWithEmailAndPassword(auth, values.email, values.password);
			console.log('Registro exitoso:', values);
			redirect('/ingresar');
			showMessageSuccessful();

			// setError(null); // Limpiar error si existía
		} catch (err) {
			console.log(err);
		}
	};

	return { handleSubmit, error, successful };
};
