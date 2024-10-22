import { Input } from '../../../calculators/components/input/Input';
import { useForm } from '../../../calculators/components/porcentageNormal/hooks/useForm';
import './Marked.scss';
export const Marked = () => {
	const { cant, unity, handleMarkedChange } = useForm();
	return (
		<section className='Marked'>
			<div className='Marked-total'>
				<p>Margen por cantidad total</p>
				<Input
					type={'number'}
					placeholder={'Marcado ( % )'}
					className={'Marked-input'}
					value={cant}
					name={'cant'}
					change={handleMarkedChange}
				/>
			</div>
			<div className='Marked-unity'>
				<p>Margen por defecto por unidad</p>
				<Input
					type={'number'}
					placeholder={'Marcado ( % )'}
					className={'Marked-input'}
					value={unity}
					name={'unity'}
					change={handleMarkedChange}
				/>
			</div>
		</section>
	);
};
