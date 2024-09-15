import './Dashboard.scss';
import { useEffect, useState } from 'react';
import { ToolsHeader } from './components';
import { DolarHeader } from './components/dolarHeader/DolarHeader';
export const Dashboard = () => {
	useEffect(() => {
		console.log('efect');
	}, []);

	return (
		<section className='Dashboard'>
			<DolarHeader />
			<ToolsHeader />
		</section>
	);
};
