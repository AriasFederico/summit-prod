import './HeaderCalc.scss';
export const HeaderCalc = ({ title, description }) => {
	return (
		<div className='HeaderCalc'>
			<h1 className='HeaderCalc-h1'>{title}</h1>
			<p className='HeaderCalc-p'>{description}</p>
		</div>
	);
};
