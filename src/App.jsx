import Aos from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';
import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalContext } from './context/GlobalContext';
import { Header } from './header/Header';
import { Home } from './pages/home/Home';
import { Login } from './pages/login/Login';
import { PrivateRoute } from './pages/private/PrivateRoute';
import { Dashboard } from './pages/private/dashboard/Dashboard';
import { Register } from './pages/register/Register';

function App() {
	const { logged } = useContext(GlobalContext);
	useEffect(() => {
		Aos.init();
	}, []);

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Home logged={logged} />} />
				<Route path='/ingresar' element={<Login />} />
				<Route path='/registrarse' element={<Register />} />
				<Route
					path='/control'
					element={
						<PrivateRoute>
							<Dashboard />
						</PrivateRoute>
					}
				>
					{/*  */}
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

// path para 404

export default App;
