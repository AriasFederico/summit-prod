import { ItemCard, TopSection } from '..'
import { SectionLayout } from '../../layout'
import styles from './Features.module.scss'

export const Features = () => {
  const items = [
    {
      icon: 'stack', title: 'Registro al instante', text: 'Calcula márgenes de ganancia, descuentos y markups en segundos.'
    },
    {
      icon: 'calculator', title: 'Calculadoras', text: 'Visualiza variaciones porcentuales entre periodos de tu negocio.'
    },
    {
      icon: 'register', title: 'Rápido y fácil', text: 'Reparte costos, comisiones y ganancias con precisión total.'
    },
  ]

  return (
    <SectionLayout bgVariant={'main'} direction={'column'} bgVariant={'soft'}>
      <div className={styles.content}>
        <TopSection text={'VENTAJAS'} />
        <h2>Todo lo que necesitas.</h2>
      </div>

      <div className={styles.items}>
        {
          items?.map(({ icon, title, text }) => (
            <ItemCard icon={icon} text={text} title={title} key={title} />
          ))
        }
      </div>
    </SectionLayout>
  )
}
