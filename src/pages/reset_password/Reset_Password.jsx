import { sendPasswordResetEmail } from "firebase/auth"
import { useState } from "react"
import { SectionLayout } from "../../components/layout";
import { ButtonCta } from "../../components/ui";
import { auth } from "../../services/firebase/credentials";
import styles from './Reset_Password.module.scss';


export const Reset_Password = () => {
    const [userEmail, setUserEmail] = useState('');
    const [resetIsSend, setResetIsSend] = useState(false);

    const handleReset = async () => {
        setResetIsSend(false)

        if (!userEmail) return
        try {
            await sendPasswordResetEmail(auth, userEmail)
            setUserEmail('')
            setResetIsSend(true)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <SectionLayout direction={'column'}>
            <div className={styles.header}>
                <h2>Recuperar contraseña</h2>
                <p>Ingresá tu correo electrónico para recibir un enlace de restablecimiento</p>
            </div>
            <div className={styles.content}>
                <label className={styles.label}>
                    Correo electrónico
                    <input type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} className={styles.input} required />
                </label>
                <ButtonCta text={'Reestablecer contraseña'} onClick={handleReset} />
                {resetIsSend && <div className={styles.emailSended}><p>Si el correo electrónico ingresado coincide con una cuenta activa, recibirás un enlace para restablecer tu contraseña en los próximos minutos. No olvides revisar tu carpeta de spam o correo no deseado.</p></div>}
            </div>
        </SectionLayout>
    )
}
