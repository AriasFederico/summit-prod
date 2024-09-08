import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState(null);
	const [logged, setLogged] = useState(false); //

	useEffect(() => {
		const auth = getAuth();
		const unsuscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
				setLogged(true);
			} else {
				setUser(null);
				setLogged(false);
			}
		});

		return () => unsuscribe();
	}, []);

	return (
		<GlobalContext.Provider
			value={{ user, logged, setLogged, signOut, loading, setLoading }}
		>
			{children}
		</GlobalContext.Provider>
	);
};
