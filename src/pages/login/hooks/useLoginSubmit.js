import { getAuth, signInWithEmailAndPassword,signInWithRedirect } from 'firebase/auth';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../../context/GlobalContext';
import { appFirebase } from '../../../services/firebase/credentials';

const auth = getAuth(appFirebase);

export const useLoginSubmit = (values) => {
	const redirect = useNavigate();
	const { setLogged } = useContext(GlobalContext);

	// estado para cuenta no encontrada
	const [accoutNotFound, setAccountNotFound] = useState(false);

	const handleSubmit = async (e) => {
		setAccountNotFound(false);
		e.preventDefault();
		try {
			await signInWithEmailAndPassword(auth, values.email, values.password);
			setLogged(true);
			redirect('/control/calculators');

			console.log('logged: ', values);
		} catch (error) {
			if (error.code === 'auth/invalid-credential') setAccountNotFound(true);
			// Esto te va a mostrar el objeto de Firebase con sus propiedades reales en la consola
			console.dir(error);

			// O directamente el string que necesitás:
			console.log('El código es:', error.code);
		}
	};

	return { handleSubmit, accoutNotFound };
};
