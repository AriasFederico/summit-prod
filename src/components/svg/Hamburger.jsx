export const Hamburger = ({ className, click }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			viewBox='0 0 21 21'
			className={className}
			onClick={click}
		>
			<path
				fill='none'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M4.5 6.5h12m-12.002 4h11.997M4.5 14.5h11.995'
			/>
		</svg>
	);
};