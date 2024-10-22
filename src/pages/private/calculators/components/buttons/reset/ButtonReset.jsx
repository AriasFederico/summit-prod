import "./ButtonReset.scss";
export const ButtonReset = ({ value, type, onClick }) => {
	return (
		<button className="ButtonReset" onClick={onClick}>
			{value}
		</button>
	);
};
