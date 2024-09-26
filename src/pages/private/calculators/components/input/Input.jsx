import './Input.scss';
export const Input = ({ type, name, placeholder, change }) => {
	return (
		<input
			className='Input'
			type={type}
			name={name}
			placeholder={placeholder}
			onChange={change}
		/>
	);
};
