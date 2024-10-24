import "./Search.scss";
export const Search = ({ value, change, click, placeholder }) => {
	return (
		<input
			className="Search"
			type="text"
			value={value}
			onChange={change}
			onClick={click}
			placeholder={placeholder}
		/>
	);
};
