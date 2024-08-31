export const Close = ({ className, click }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='0.75em'
			height='1em'
			viewBox='0 0 12 16'
			className={className}
			onClick={click}
		>
			<path
				fill='currentColor'
				d='M10 12.5a.47.47 0 0 1-.35-.15l-8-8c-.2-.2-.2-.51 0-.71s.51-.2.71 0l7.99 8.01c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z'
			/>
			<path
				fill='currentColor'
				d='M2 12.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l8-7.99c.2-.2.51-.2.71 0s.2.51 0 .71l-8.01 7.99c-.1.1-.23.15-.35.15'
			/>
		</svg>
	);
};