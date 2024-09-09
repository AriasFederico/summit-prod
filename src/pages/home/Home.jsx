import './Home.scss';
import { Navigate } from 'react-router-dom';
import { Hero } from './components/hero/Hero';
import { LastSection } from './components/last/LastSection';
import { ComponentBanner } from './components/section/BannerTemplate';

export const Home = ({ logged }) => {
	if (logged) return <Navigate to={'/control'} />;

	return (
		<div className='Home'>
			<Hero />
			<ComponentBanner />
			<LastSection />
		</div>
	);
};
