import { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Loading } from '../../components/common/loading/Loading';
import { GlobalContext } from '../../context/GlobalContext';

export const PrivateRoute = ({ children }) => {
	const { logged, loading, setLoading } = useContext(GlobalContext);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);

	if (loading) {
		return <Loading />;
	}
	return logged ? children : <Navigate to='/' />;
};
