import './Tools.scss';
import { ArrowDown } from '../../../../../components/svg/ArrowDown';

export const Tools = ({ nameTool }) => {
	return (
		<div className='Tools'>
			<ArrowDown className={'Tools-arrow'} />
			<p className='Tools-p'>{nameTool}</p>
		</div>
	);
};
