export const Hamburger = ({ className, click }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			viewBox='0 0 2048 2048'
			className={className}
			onClick={click}
		>
			<path
				fill='currentColor'
				d='M256 512h1536v128H256zm384 512V896h1152v128zm384 384v-128h768v128z'
			/>
		</svg>
	);
};
