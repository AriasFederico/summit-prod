import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../../context/GlobalContext';
import { appFirebase } from '../../../services/firebase/credentials';
const auth = getAuth(appFirebase);

export const useLoginSubmit = (values) => {
	const redirect = useNavigate();
	const { setLogged } = useContext(GlobalContext);
	const [loginError, setLoginError] = useState(false);

	const showError = () => {
		setLoginError(true);
		setTimeout(() => {
			setLoginError(false);
		}, 3000);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await signInWithEmailAndPassword(auth, values.email, values.password);
			setLogged(true);
			redirect('/control/calculators');

			console.log('logged: ', values);
		} catch (error) {
			console.log(error);
			showError();
		}
	};

	return { handleSubmit, loginError };
};
