import './MessageError.scss';

export const MessageError = ({ active }) => {
	return (
		<span className={active ? 'MessageError-active' : 'MessageError'}>
			Mínimo 8 caracteres
		</span>
	);
};
