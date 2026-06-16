import { ItemCard, TopSection } from '..'
import { SectionLayout } from '../../layout'
import styles from './Features.module.scss'

export const Features = () => {
  const items = [
    {
      icon: 'stack', title: 'Registro al instante', text: 'Creá la cuenta de tu negocio con tu email en dos segundos.'
    },
    {
      icon: 'calculator', title: 'Calculadoras', text: 'Calculá márgenes de ganancia en segundos.'
    },
    {
      icon: 'register', title: 'Rápido y fácil', text: 'Una interfaz intuitiva diseñada para agilizar el día a día de tu negocio'
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
