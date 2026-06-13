import { Link, Navigate } from 'react-router-dom';
import { iconMap } from '../../components/iconMap';
import { SectionLayout } from '../../components/layout';
import { ButtonCta, ButtonGoogle } from '../../components/ui';
import { signInWithGoogle } from '../../services/firebase/credentials';
import { useForm } from '../../utils/useForm';
import styles from './Login.module.scss'
import { useLogin } from './hooks/useLogin';
import { useLoginSubmit } from './hooks/useLoginSubmit';

export const Login = ({ verifyLogged }) => {
	if (verifyLogged) return <Navigate to={'/control'} />;

	const { initialLogin } = useLogin();
	const { values, handleChange } = useForm(initialLogin);

	const { handleSubmit, accoutNotFound } = useLoginSubmit(values);

	return (
		<SectionLayout direction={'column'} bgVariant={'main'}>
			<div className={styles.header}>
				<h2>Bienvenido de nuevo</h2>
				<p>Inicia sesión en tu cuenta.</p>
				{/* crear componente true/false ? o crear uno para cada uno? me parece que true/false con icono para poder reutilizarlo en la lista dashboard */}
			</div>
			<form onSubmit={handleSubmit} className={styles.form}>
				<ButtonGoogle event={signInWithGoogle} />
				<div className={styles.separator}>
					<div />
					<p>o</p>
					<div />
				</div>
				<label className={styles.label}>
					Correo electrónico
					<input className={styles.input} type="email" value={values.email} onChange={handleChange} name='email' placeholder='tu@ejemplo.com' required />
				</label>

				<label className={styles.label}>
					Contraseña
					<input className={styles.input} type="password" value={values.password} onChange={handleChange} name='password' placeholder='********' required />
				</label>
				{
					accoutNotFound && <p className={styles.accoutNotFound}>Datos inválidos</p>
				}
				<div className={styles.ctas}>
					<ButtonCta type='submit' text={'Iniciar sesión'} />
				</div>
				<Link to='/recuperar' className={styles.noAccout}>Olvide mi contraseña.</Link>
			</form>
		</SectionLayout >
	);
};
