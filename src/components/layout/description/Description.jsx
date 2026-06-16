import calculators from '../../../assets/calculators.webp'
import list from '../../../assets/list.webp'
import { TopSection } from "../../ui"
import { SectionLayout } from "../section_layout/SectionLayout"
import styles from './Description.module.scss'

export const Description = () => {
    return (
        <>
            <SectionLayout>
                <div className={styles.content}>
                    <TopSection text={'MARGEN DE GANANCIA'} />
                    <h2>Calculadoras porcentuales.</h2>
                    <p className={styles.text}>Ingresá el costo de tu producto y el margen que queres ganar. Pricify calcula al instante el precio de venta ideal y la ganancia neta, sin fórmulas ni hojas de cálculos.</p>
                </div>
                <div className={styles.media}>
                    <img src={calculators} alt="" className={styles.img} />
                </div>
            </SectionLayout>
            <SectionLayout direction={'row_reverse'}>
                <div className={styles.content}>
                    <TopSection text={'LISTA DE PRODUCTOS'} />
                    <h2>Gestioná tu lista de precios.</h2>
                    <p className={styles.text}>Cada cálculo que realizas puede agregarse directo a tu lista de productos. Lleva un registro claro de costos, precios y márgenes de todo tu catálogo en un solo lugar.</p>
                </div>
                <div className={styles.media}>
                    <img src={list} alt="" className={styles.img} />
                </div>
            </SectionLayout>
        </>
    )
}
