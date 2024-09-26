import { Input } from '../../input/Input';
import './FormCalculator.scss';
export const FormCalculator = () => {
	return (
		<form className='FormCalculator'>
			<div className='FormCalculator-margin'>
				<Input
					type={'number'}
					placeholder={'Ganancia por cantidad total (%)'}
					change={''}
					name={'name'}
				/>
				<Input
					type={'number'}
					placeholder={'Ganancia por unidad (%)'}
					change={''}
					name={'name'}
				/>
			</div>

			<Input
				type={'number'}
				placeholder={'Valor del producto ($)'}
				change={''}
				name={'name'}
			/>
			<Input
				type={'number'}
				placeholder={'Cantidad total de producto'}
				change={''}
				name={'name'}
			/>
			<Input
				type={'text'}
				placeholder={'Nombre del producto'}
				change={''}
				name={'name'}
			/>
			{/* boton predefinido */}
		</form>
	);
};
