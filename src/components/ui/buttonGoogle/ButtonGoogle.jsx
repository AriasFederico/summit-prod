import { iconMap } from "../../iconMap"
import styles from './ButtonGoogle.module.scss'
export const ButtonGoogle = ({ event }) => {
    const IconGoogle = iconMap.google;
    return (
        <button className={styles.buttonGoogle} onClick={event} type="button">
            {IconGoogle && <IconGoogle className={styles.icon} />}
            Continuar con Google
        </button>
    )
}
