import './Header.scss';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { NavMobileCommon } from './components/nav/mobile/common/NavMobileCommon';
import { AlertMobile } from './components/nav/mobile/logged/AlertMobile';
import { NavPcCommon } from './components/nav/pc/common/NavPcCommon';
import { NavPcLogged } from './components/nav/pc/logged/NavPcLogged';

export const Header = () => {
	const { logged, user } = useContext(GlobalContext);
	return (
		<header className='Header'>
			{logged ? (
				<>
					<AlertMobile />
					<NavPcLogged user={user} />
				</>
			) : (
				<>
					<NavMobileCommon />
					<NavPcCommon />
				</>
			)}
		</header>
	);
};
