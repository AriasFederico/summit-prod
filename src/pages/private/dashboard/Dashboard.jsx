import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { SectionLayout } from '../../../components/layout';
import { GlobalContext } from '../../../context/GlobalContext';
import { Notify } from '../calculators/components/notify/Notify';
import styles from './Dashboard.module.scss';
import { ToolsHeader } from './components';
import { Tools } from './components';
import { DolarHeader } from './components/dolarHeader/DolarHeader';

export const Dashboard = () => {
	return (
		<SectionLayout>
			<div className={styles.content}>
				<DolarHeader />
				<Tools nameTool={'Herramientas'} />
				<ToolsHeader />
				<hr className={styles.separator} />
				<Outlet />
			</div>
		</SectionLayout>
	);
};
