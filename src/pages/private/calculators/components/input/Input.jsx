import "./Input.scss";
export const Input = ({
	type,
	name,
	placeholder,
	change,
	valueInput,
	id,
	className,
}) => {
	return (
		<input
			id={id}
			className={`Input ${className}`}
			type={type}
			min={0}
			name={name}
			placeholder={placeholder}
			onChange={change}
			step="any"
			value={valueInput}
		/>
	);
};
