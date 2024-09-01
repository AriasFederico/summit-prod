import { Check } from '../../../../../components/svg/Check';
import './ItemCheck.scss';
export const ItemCheck = ({ p }) => {
	return (
		<div className='ItemCheck'>
			<Check className={'ItemCheck-svg'} />
			<p className='ItemCheck-p'>{p}</p>
		</div>
	);
};
