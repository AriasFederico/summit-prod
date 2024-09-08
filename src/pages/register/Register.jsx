import './Register.scss';
import { Link } from 'react-router-dom';
import { Logo } from '../../components/svg/Logo';
import { useForm } from '../../utils/useForm';
import { InputRegister } from './components/input/InputRegister';
import { MessageError } from './components/messageError/MessageError';
import { BtnRegister } from './components/submit/BtnRegister';
import { useRegister } from './hooks/useRegister';
import { useRegisterSubmit } from './hooks/useRegisterSubmit';

export const Register = () => {
	const { initialRegister } = useRegister();
	const { values, handleChange, resetForm } = useForm(initialRegister);
	const { handleSubmit, error, successful } = useRegisterSubmit(
		values,
		resetForm,
	);
	// const {}

	return (
		<div className='Register'>
			<div className='Register-form-div'>
				<div className='Register-logo-cont'>
					<Logo className={'Register-logo'} svg={'Register-svg'} />
				</div>
				<form className='Register-form' onSubmit={handleSubmit}>
					<div className='Register-presentation'>
						<h2 className='Register-h2'>Registra tu negocio</h2>
						<p className='Register-p'>Ingresa tus datos para el registro</p>
					</div>
					<div className='Register-personal'>
						<InputRegister
							className={'Register-input'}
							type={'email'}
							placeholder={'Email'}
							value={values.email}
							change={handleChange}
							name={'email'}
						/>
						<InputRegister
							className={'Register-input'}
							type={'password'}
							placeholder={'Contraseña'}
							value={values.password}
							change={handleChange}
							name={'password'}
						/>
						{error ? <MessageError active /> : <MessageError />}
					</div>

					<div className='Register-btns'>
						<BtnRegister type='submit' successful={successful} />
						<Link className='Register-register' to={'/ingresar'}>
							Ya tengo una cuenta
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};
