import './Header.scss';
import { NavMobileCommon } from './components/nav/mobile/common/NavMobileCommon';

export const Header = () => {
	return (
		<header className='Header'>
			<NavMobileCommon />
		</header>
	);
};
