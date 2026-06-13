import hero from '../../../assets/hero.webp'
import { HeroLayout } from '../../heroLayout/HeroLayout'
import { ButtonCta, TopSection } from '../../ui/'
import styles from './Hero.module.scss'

export const Hero = () => {
    return (
        <HeroLayout bgVariant={'main'}>
            <div className={styles.content}>
                <TopSection text={'HERRAMIENTAS PARA TU NEGOCIO'} />
                <h1 className={styles.title}>Los porcentajes de tu negocio, </h1>
                <p className={styles.text}>Pricify es una aplicación web gratuita e innovadora diseñada para facilitar la gestión y el cálculo de precios de manera rápida y eficiente.</p>
                <div className={styles.ctas}>
                    <ButtonCta text={'Comenzar gratis'} href={'/registrarse'} />
                    <ButtonCta variant='secondary' text={'Ya tengo cuenta'} icon={'arrowRight'} href={'/ingresar'} />
                </div>
            </div>

            <div className={styles.media}>
                <img src={hero} alt="" className={styles.img} />
            </div>
        </HeroLayout>
    )
}
