import { useState } from 'react';

export const useNav = () => {
	const [activeMenu, setActiveMenu] = useState(false);
	const handleMenu = () => {
		setActiveMenu(!activeMenu);
	};

	const closeMenu = () => {
		setActiveMenu(false);
	};
	return {
		activeMenu,
		handleMenu,
		closeMenu,
	};
};
