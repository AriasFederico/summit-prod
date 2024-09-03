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
						<h1 className='Login-h1'>Iniciar sesión</h1>
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
						{/* error component */}
					</div>

					<Link className='Login-forgot'>¿ Olvidaste tu contraseña ?</Link>

					<div className='Login-btns'>
						<BtnSubmit type='submit' />

						<Link className='Login-register'>No tengo una cuenta</Link>
					</div>
				</form>
			</div>
		</div>
	);
};
