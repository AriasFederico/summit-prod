import { useEffect, useState } from 'react';
import { getDolarData } from '../../services/getDolar';
import { Tools } from '../tools/Tools';
import { Dolar } from './dolarCard/Dolar';
import './DolarHeader.scss';

export const DolarHeader = () => {
	const [dolarValue, setDolarValue] = useState(null);
	const [dolarBlueValue, setDolarBlueValue] = useState(null);
	const [mayoristaValue, setMayoristeValue] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { dolarData, dolarBlueData, dolarMay } = await getDolarData();

				setDolarBlueValue(dolarBlueData);
				setDolarValue(dolarData);
				setMayoristeValue(dolarMay);
			} catch (error) {
				console.log(error);
			}
		};
		console.log(dolarBlueValue, dolarValue);
		fetchData();
	}, []);

	const arrayDolarData = [
		{ id: 'dolarDataOficial', data: dolarValue },
		{ id: 'dolarBlue', data: dolarBlueValue },
		{ id: 'dolarMayorista', data: mayoristaValue },
	];

	return (
		<div className='DolarHeader' data-aos={'zoom-in'}>
			{/* <Tools nameTool={'Valor del dolar hoy'} /> */}
			<div className='DolarHeader-fx'>
				{arrayDolarData.map(({ id, data }) => (
					<Dolar key={id} data={data} />
				))}
			</div>
		</div>
	);
};
