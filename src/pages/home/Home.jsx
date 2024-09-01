import './Home.scss';
import { Hero } from './components/hero/Hero';
import { ComponentBanner } from './components/section/BannerTemplate';
export const Home = () => {
	return (
		<div className='Home'>
			<Hero />
			<ComponentBanner />
		</div>
	);
};
