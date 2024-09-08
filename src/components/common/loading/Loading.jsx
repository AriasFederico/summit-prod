import { Logo } from '../../svg/Logo';
import './Loading.scss';
export const Loading = () => {
	return (
		<div className='Loading'>
			<Logo className={'Loading-link'} svg={'Loading-svg'} />
		</div>
	);
};
