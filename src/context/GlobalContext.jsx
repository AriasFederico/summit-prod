import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState(null);
	const [logged, setLogged] = useState(false); //

	useEffect(() => {
		const auth = getAuth();
		const unsuscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user.email);
				setLogged(true);
			} else {
				setUser(null);
				setLogged(false);
			}
		});

		return () => unsuscribe();
	}, []);

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

	const handleSignOut = async () => {
		const auth = getAuth();
		try {
			await signOut(auth); // Llama a la función de Firebase
			setUser(null);
			setLogged(false);
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
				signOut: handleSignOut,
				loading,
				setLoading,
				bbddCalculators,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
