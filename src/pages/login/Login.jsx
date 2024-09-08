import './Login.scss';
import { Link } from 'react-router-dom';
import { Logo } from '../../components/svg/Logo';
import { useForm } from '../../utils/useForm';
import { InputLogin } from './components/InputLogin';
import { LoginHeader } from './components/loginHeader/LoginHeader';
import { BtnSubmit } from './components/submit/BtnSubmit';
import { useLogin } from './hooks/useLogin';
import { useLoginSubmit } from './hooks/useLoginSubmit';

export const Login = () => {
	const { initialLogin } = useLogin();
	const { values, handleChange } = useForm(initialLogin);
	const { handleSubmit, loginError } = useLoginSubmit(values);

	return (
		<div className='Login'>
			<div className='Login-form-div'>
				<div className='Login-logo-cont'>
					<Logo className={'Login-logo'} svg={'Login-svg'} />
				</div>
				<form className='Login-form' onSubmit={handleSubmit}>
					<LoginHeader
						title={'Iniciar sesión'}
						subtitle={'Ingresa los datos de tu dirección'}
					/>
					<div className='Login-personal'>
						<InputLogin
							className={'Login-input'}
							type={'text'}
							placeholder={'Email'}
							value={values.email}
							change={handleChange}
							name={'email'}
						/>
						<InputLogin
							className={'Login-input'}
							type={'password'}
							placeholder={'Contraseña'}
							value={values.password}
							change={handleChange}
							name={'password'}
						/>

						{loginError ? (
							<p className='Login-error-active'>
								Email o contraseña incorrecta
							</p>
						) : (
							<p className='Login-error'>Email</p>
						)}
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
