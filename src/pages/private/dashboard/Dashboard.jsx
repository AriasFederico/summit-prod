import './Dashboard.scss';
import { useEffect, useState } from 'react';
import { ToolsHeader } from './components';
import { DolarHeader } from './components/dolarHeader/DolarHeader';
import { getDay } from './services/getFeriados';
export const Dashboard = () => {
	useEffect(() => {
		console.log('efect');
		getDay();
	}, []);

	return (
		<section className='Dashboard'>
			<DolarHeader />
			<ToolsHeader />
		</section>
	);
};
