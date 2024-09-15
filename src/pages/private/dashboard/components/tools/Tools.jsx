import './Tools.scss';
import { ArrowDown } from '../../../../../components/svg/ArrowDown';

export const Tools = ({ nameTool, event }) => {
	return (
		<div className='Tools' onClick={event}>
			<p className='Tools-p'>{nameTool}</p>
			<ArrowDown className={'Tools-arrow'} />
		</div>
	);
};
