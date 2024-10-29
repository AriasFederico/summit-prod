import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { appFirebase } from "../services/firebase/credentials";
import { getFirestore } from "firebase/firestore";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState(null);
	const [logged, setLogged] = useState(false);
	const [exit, setExit] = useState(false); // Variable exit
	const [list, setList] = useState([]);

	const bbddCalculators = [
		{
			calculatorNormal: [
				{
					title: "Calculadora para productos con volúmen o cantidad",
					description:
						"Obtené el precio total y por unidad de peso o cantidad fácilmente.",
				},
			],
		},
		{
			calculatorSingle: [
				{
					title: "Calculadora para productos individuales",
					description: "Obtené el precio por producto rápidamente",
				},
			],
		},
	];

	useEffect(() => {
		const auth = getAuth();
		const unsubscribe = onAuthStateChanged(auth, async (user) => {
			if (user) {
				setUser(user.email);
				setLogged(true);
			} else {
				setUser(null);
				setLogged(false);
			}
			setLoading(false); // Detener el loading después de verificar el usuario
		});

		return () => unsubscribe();
	}, []);

	const handleSignOut = async () => {
		const auth = getAuth();
		try {
			await signOut(auth);
			setUser(null);
			setLogged(false);
			setList([]); // Limpiar la lista al cerrar sesión
		} catch (error) {
			console.error("Error al cerrar sesión:", error);
		}
	};

	return (
		<GlobalContext.Provider
			value={{
				user,
				setUser,
				logged,
				setLogged,
				exit,
				setExit,
				signOut: handleSignOut,
				loading,
				setLoading,
				list,
				bbddCalculators,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
