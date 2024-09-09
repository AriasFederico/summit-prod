import './AlertMobile.scss';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../../../../context/GlobalContext';

export const AlertMobile = () => {
	const redirect = useNavigate();

	const { signOut, setLogged } = useContext(GlobalContext);

	const handleSignOut = () => {
		signOut();
		setLogged(false);
		redirect('/');
	};
	return (
		<div className='AlertMobile'>
			<p className='AlertMobile-p'>
				Para una mejor experiencia, por favor utiliza una PC o tablet para ver
				la lista de precios y nuestras calculadoras.
			</p>
			<button className='AlertMobile-btn' onClick={handleSignOut}>
				Volver
			</button>
		</div>
	);
};
