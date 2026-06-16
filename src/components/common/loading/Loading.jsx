// import { Logo } from '../../svg/Logo';
import './Loading.scss';
import pricify from '../../../assets/pricify.png'
export const Loading = () => {
	return (
		<div className='Loading'>
			<img src={pricify} alt="pricify" className='img'/>
			<p className='pricify'>Pricify</p>
		</div>
	);
};
