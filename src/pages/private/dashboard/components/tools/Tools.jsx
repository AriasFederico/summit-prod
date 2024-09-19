import './Tools.scss';
import { ArrowDown } from '../../../../../components/svg/ArrowDown';

export const Tools = ({ nameTool }) => {
	return (
		<div className='Tools'>
			<p className='Tools-p'>{nameTool}</p>
			<ArrowDown className={'Tools-arrow'} />
		</div>
	);
};
