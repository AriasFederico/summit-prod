import { useEffect, useState } from 'react';
import { getDolarData } from '../../services/getDolar';
import { Dolar } from './dolarCard/Dolar';
export const DolarHeader = () => {
	const [dolarValue, setDolarValue] = useState(null);
	const [dolarBlueValue, setDolarBlueValue] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { dolarData, dolarBlueData } = await getDolarData();

				setDolarBlueValue(dolarBlueData);
				setDolarValue(dolarData);
			} catch (error) {
				console.log(error);
			}
		};
		console.log(dolarBlueValue, dolarValue);
		fetchData();
	}, []);

	return (
		<div className='DolarHeader'>
			{dolarValue && (
				<Dolar
					moneda={dolarValue.moneda}
					nombre={dolarValue.casa}
					venta={dolarValue.venta}
					compra={dolarValue.compra}
				/>
			)}

			{dolarBlueValue && (
				<Dolar
					moneda={dolarBlueValue.moneda}
					nombre={dolarBlueValue.casa}
					venta={dolarBlueValue.venta}
					compra={dolarBlueValue.compra}
				/>
			)}
		</div>
	);
};
