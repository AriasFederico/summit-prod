import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { useGetList } from "../pages/private/products/hooks/useGetList";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
	const { getList, handleDeleteItem, list } = useGetList();
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState(null);
	const [logged, setLogged] = useState(false);


	useEffect(() => {
		const auth = getAuth();
		const unsubscribe = onAuthStateChanged(auth, async (user) => {
			if (user) {
				setUser(user.email);
				setLogged(true);
				await getList();
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
				list,
				getList,
				handleDeleteItem
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
