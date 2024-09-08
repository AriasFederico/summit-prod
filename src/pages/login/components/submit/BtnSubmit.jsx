import './BtnSubmit.scss';
import { useRegisterSubmit } from '../../../register/hooks/useRegisterSubmit';

export const BtnSubmit = ({ type, successful }) => {
	return (
		<button
			className={successful ? 'BtnSubmit-successful' : 'BtnSubmit'}
			type={type}
		>
			{successful ? 'Registro exitoso' : 'Ingresar'}
		</button>
	);
};
