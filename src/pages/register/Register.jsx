import './Register.scss';
import { Link } from 'react-router-dom';
import { Logo } from '../../components/svg/Logo';
import { BtnSubmit } from '../login/components/submit/BtnSubmit';
import { InputRegister } from './components/InputRegister';

export const Register = () => {
	return (
		<div className='Register'>
			<div className='Register-form-div'>
				<div className='Register-logo-cont'>
					<Logo className={'Register-logo'} svg={'Register-svg'} />
				</div>
				<form className='Register-form'>
					<div className='Register-presentation'>
						<h2 className='Register-h2'>Registra tu negocio</h2>
						<p className='Register-p'>Ingresa tus datos para el registro</p>
					</div>
					<div className='Register-personal'>
						<InputRegister
							className={'Register-input'}
							type={'text'}
							placeholder={'Email'}
							value={''}
							change={''}
							name={'Email'}
						/>
						<InputRegister
							className={'Register-input'}
							type={'password'}
							placeholder={'Contraseña'}
							value={''}
							change={''}
							name={'Contraseña'}
						/>

						<p className='Register-error'>
							Minimo 8 caracteres para la contraseña
						</p>
					</div>

					<div className='Register-btns'>
						<BtnSubmit type='submit' />
						<Link className='Register-register' to={'/ingresar'}>
							Ya tengo una cuenta
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};
