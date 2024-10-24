import "./Button.scss";
export const Button = ({ value, type, click }) => {
	return (
		<button className="Button" type={type} onClick={click}>
			{value}
		</button>
	);
};
