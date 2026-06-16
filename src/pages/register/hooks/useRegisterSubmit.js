import { 
    createUserWithEmailAndPassword, 
    getAuth, 
    signInWithRedirect, 
    GoogleAuthProvider 
} from 'firebase/auth';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../../context/GlobalContext';
import { appFirebase } from '../../../services/firebase/credentials';

const auth = getAuth(appFirebase);
const provider = new GoogleAuthProvider(); // Instanciamos el proveedor de Google

export const useRegisterSubmit = (values) => {
    const redirect = useNavigate();
    const { setLogged, setUser } = useContext(GlobalContext); 
    const [error, setError] = useState(false);
    const [successful, setSuccessful] = useState(false);

    // 1. REGISTRO TRADICIONAL CON EMAIL Y PASSWORD
    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(false);

        if (values.password.length < 8) {
            setError(true);
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
            const user = userCredential.user;

            console.log('Registro exitoso de:', user.email);

            if (setUser) setUser(user);
            if (setLogged) setLogged(true);

            setSuccessful(true); 
            redirect('/control/calculators');

        } catch (err) {
            console.log("Error en el registro de Firebase:", err);
            setError(true);
        }
    };

    // 2. NUEVO: REGISTRO/LOGIN CON EL BOTÓN DE GOOGLE
    const handleGoogleSubmit = async () => {
        setError(false);
        try {
            const result = await signInWithRedirect(auth, provider);
            const user = result.user;

            console.log('Registro con Google exitoso de:', user.email);

            // Actualizamos el contexto exactamente igual que arriba
            if (setUser) setUser(user);
            if (setLogged) setLogged(true);

            setSuccessful(true);
            // Redirigimos al dashboard
            redirect('/control/calculators');

        } catch (err) {
            console.log("Error en el registro con Google:", err);
            setError(true);
        }
    };

    // Exportamos la nueva función junto con las anteriores
    return { handleSubmit, handleGoogleSubmit, error, successful };
};