import './Home.scss';
import { Navigate } from 'react-router-dom';
import { Cta, Description, Features, Footer, Hero } from '../../components/layout';

export const Home = ({ logged }) => {
	if (logged) return <Navigate to={'/control/calculators'} />;

	return (
		<div className='home'>
			<Hero />
			<Features />
			<Description />
			<Cta />
			<Footer name={'Pricify'} />
		</div>
	);
};
