export const BtnRegister = ({ type, successful }) => {
	return (
		<button
			className={successful ? 'BtnSubmit-successful' : 'BtnSubmit'}
			type={type}
		>
			{successful ? 'Registro exitoso' : 'Registrarse'}
		</button>
	);
};
