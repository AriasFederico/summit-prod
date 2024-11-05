export const Edit = ({ className, click }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 48 48"
			className={className}
			onClick={click}
		>
			<g
				fill="none"
				stroke="currentColor"
				strokeLinejoin="round"
				strokeWidth="4"
			>
				<path strokeLinecap="round" d="M7 42h36" />
				<path d="M11 26.72V34h7.317L39 13.308L31.695 6z" />
			</g>
		</svg>
	);
};
