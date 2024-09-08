import './RegisterHeader.scss';
export const RegisterHeader = ({ title, subtitle }) => {
	return (
		<div className='RegisterHeader'>
			<h2 className='RegisterHeader-title'>{title}</h2>
			<p className='RegisterHeader-subtitle'>{subtitle}</p>
		</div>
	);
};
