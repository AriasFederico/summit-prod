export const ArrowDown = ({ className, event }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			viewBox='0 0 24 24'
			className={className}
			onClick={event}
		>
			<path
				fill='none'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='2.5'
				d='m7 10l5 5m0 0l5-5'
			/>
		</svg>
	);
};
