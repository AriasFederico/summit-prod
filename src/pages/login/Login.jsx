import './Login.scss';
import { Link } from 'react-router-dom';
import { Logo } from '../../components/svg/Logo';
import { InputLogin } from './components/InputLogin';
import { BtnSubmit } from './components/submit/BtnSubmit';
export const Login = () => {
	return (
		<div className='Login'>
			<div className='Login-form-div'>
				<div className='Login-logo-cont'>
					<Logo className={'Login-logo'} svg={'Login-svg'} />
				</div>
				<form className='Login-form'>
					<div className='Login-presentation'>
						<h2 className='Login-h2'>Iniciar sesión</h2>
						<p className='Login-p'>Ingresá los detalles de tu dirección</p>
					</div>
					<div className='Login-personal'>
						<InputLogin
							className={'Login-input'}
							type={'text'}
							placeholder={'Email'}
							value={''}
							change={''}
							name={'Email'}
						/>
						<InputLogin
							className={'Login-input'}
							type={'password'}
							placeholder={'Contraseña'}
							value={''}
							change={''}
							name={'Contraseña'}
						/>

						<p className='Login-error'>Email o contraseña incorrecta</p>
					</div>

					<Link className='Login-forgot' to={'#'}>
						¿ Olvidaste tu contraseña ?
					</Link>

					<div className='Login-btns'>
						<BtnSubmit type='submit' />
						<Link className='Login-register' to={'/registrarse'}>
							No tengo una cuenta
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};
