import { useState } from 'react';
import { Link } from 'react-router-dom';
import { iconMap } from '../../components/iconMap';
import { SectionLayout } from '../../components/layout';
import { ButtonCta, ButtonGoogle } from '../../components/ui';
import { signInWithGoogle } from '../../services/firebase/credentials';
import { useForm } from '../../utils/useForm';
import styles from './Register.module.scss'
import { useRegister } from './hooks/useRegister';
import { useRegisterSubmit } from './hooks/useRegisterSubmit';

export const Register = () => {
	const { initialRegister } = useRegister();
	const { values, handleChange, resetForm } = useForm(initialRegister);
	const EyeIcon = iconMap.eye;

	const { handleSubmit, error, successful } = useRegisterSubmit(
		values,
		resetForm,
	);

	const [changeInputType, setChangeInputType] = useState(false);

	return (
		<SectionLayout direction={'column'} bgVariant={'main'}>
			<div className={styles.header}>
				<h2>Crea tu cuenta</h2>
				<p>Registrate para comenzar.</p>
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
					<input className={styles.input} type="email" onChange={handleChange} name='email' placeholder='tu@ejemplo.com' required />
				</label>

				<label className={styles.label}>
					Contraseña
					<div className={styles.inputGroup}>
						<input className={styles.input} type={changeInputType ? 'text' : 'password'} value={values.password} onChange={handleChange} name='password' placeholder='********' required />
						<button type='button' className={styles.eyeContainer} onClick={() => setChangeInputType(!changeInputType)}><EyeIcon /></button>
					</div>
				</label>
				<div className={styles.ctas}>
					<ButtonCta type='submit' text={'Crear cuenta'} />
				</div>
				{
					error && <p className={styles.error}>Minimo 8 carácteres</p>
				}
			</form>
		</SectionLayout >
	);
};

