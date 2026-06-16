import Aos from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/layout';
import { GlobalContext } from './context/GlobalContext';
import { Calculators, Dashboard, Home, Login, PrivateRoute, Products, Register, Reset_Password } from './pages';
// ELIMINAR AOS ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

import { useGetList } from './pages/private/products/hooks/useGetList';

function App() {

	const { logged } = useContext(GlobalContext);

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route
					path='/'
					element={<Home verifyLogged={logged} logged={logged} />}
				/>
				<Route path='/ingresar' element={<Login verifyLogged={logged} />} />
				<Route
					path='/registrarse'
					element={<Register verifyLogged={logged} />}
				/>
				<Route path='/recuperar' element={<Reset_Password />} />
				<Route
					path='/control'
					element={
						<PrivateRoute>
							<Dashboard />
						</PrivateRoute>
					}
				>
					<Route path='calculators' element={<Calculators />} />
					<Route path='products' element={<Products />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

// path para 404

export default App;
