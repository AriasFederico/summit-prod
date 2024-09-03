import Aos from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './header/Header';
import { Home } from './pages/home/Home';
import { Login } from './pages/login/Login';

function App() {
	useEffect(() => {
		Aos.init();
	}, []);

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/ingresar' element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

// path para 404

export default App;
