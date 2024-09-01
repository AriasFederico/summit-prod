import './Header.scss';
import { NavMobileCommon } from './components/nav/mobile/common/NavMobileCommon';
import { NavPcCommon } from './components/nav/pc/common/NavPcCommon';

export const Header = () => {
	return (
		<header className='Header'>
			<NavMobileCommon />
			<NavPcCommon />
		</header>
	);
};
