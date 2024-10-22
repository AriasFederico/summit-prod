export const ArrowDown = ({ className, event }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			className={className}
			onClick={event}
		>
			<path fill="currentColor" d="M10 17V7l5 5z" />
		</svg>
	);
};
