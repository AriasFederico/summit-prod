import './Button.scss';
export const Button = ({ value, type }) => {
	return (
		<button className='Button' type={type}>
			{value}
		</button>
	);
};
