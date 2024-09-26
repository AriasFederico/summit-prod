import './PorcentageNormal.scss';
import { useContext } from 'react';
import { GlobalContext } from '../../../../../context/GlobalContext';
import { HeaderCalc } from '../header/HeaderCalc';
import { FormCalculator } from './formCalculator/FormCalculator';
export const PorcentageNormal = () => {
	const { bbddCalculators } = useContext(GlobalContext);
	const { calculatorNormal } = bbddCalculators[0];

	return (
		<div className='PorcentageNormal'>
			{calculatorNormal.map((e, index) => (
				<HeaderCalc title={e.title} description={e.description} key={index} />
			))}

			<div className='PorcentageNormal-cont'>
				<FormCalculator />
				<div className='PorcentageNormal-res'>Resultado</div>
			</div>
		</div>
	);
};
