export const Edit = ({ className, click }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			className={className}
			onClick={click}
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M11.577 5.211a7.8 7.8 0 1 0 5.938 2.274l.849-.849a9 9 0 1 1-7.195-2.598l-1.19-1.19l.85-.848l2.474 2.475a.5.5 0 0 1 0 .707l-.495.495l-1.98 1.98l-.848-.849z"
			/>
		</svg>
	);
};
