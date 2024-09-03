export const InputLogin = ({
	name,
	className,
	type,
	placeholder,
	value,
	change,
}) => {
	return (
		<input
			name={name}
			className={className}
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={change}
		/>
	);
};
