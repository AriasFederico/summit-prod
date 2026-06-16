import { ButtonCta, TopSection } from '../../ui'
import { SectionLayout } from '../section_layout/SectionLayout'

import styles from './Cta.module.scss'
export const Cta = () => {
    return (
        <SectionLayout bgVariant={'soft'}>
            <div className={styles.content}>
                <TopSection text={'NO ESPERES MAS'} />
                <h2>Transformá tu gestión en minutos</h2>
                <p>Con Pricify, lleva el control de tus precios, optimiza tus márgenes de ganancia y simplifica la gestión de tu negocio. Disfruta de una plataforma fácil de usar, diseñada para adaptarse a tus necesidades y ayudarte a alcanzar tus objetivos.</p>
                <div className={styles.ctas}>
                    <ButtonCta variant='secondary' text={'Comenzar gratis'} icon={'arrowRight'} href={'/registrarse'} />
                </div>
            </div>
        </SectionLayout>
    )
}
