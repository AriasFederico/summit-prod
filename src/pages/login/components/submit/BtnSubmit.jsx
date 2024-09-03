import './BtnSubmit.scss';
import { Link } from 'react-router-dom';
export const BtnSubmit = ({ type }) => {
	return (
		<button className='BtnSubmit' type={type}>
			Ingresar
		</button>
	);
};
