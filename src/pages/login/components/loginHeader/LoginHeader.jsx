import './LoginHeader.scss';
export const LoginHeader = ({ title, subtitle }) => {
	return (
		<div className='LoginHeader'>
			<h2 className='LoginHeader-title'>{title}</h2>
			<p className='LoginHeader-p'>{subtitle}</p>
		</div>
	);
};
