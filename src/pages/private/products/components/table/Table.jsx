import { iconMap } from '../../../../../components/iconMap';
import styles from './Table.module.scss'

const contentTable = {
    th: ['Producto', 'Precio total', 'Precio unidad', 'Marcado', 'Acciones']
}
const { th } = contentTable;

export const Table = ({ list, deleteItem, edit, }) => {
    const IconEdit = iconMap.edit;
    const IconDelete = iconMap.trash;
    return (
        <table className={styles.table}>
            <thead className={styles.thead}>
                <tr>
                    {th?.map((e) => <th key={e} className={styles.th}>{e}</th>)}
                </tr>
            </thead>
            <tbody className={styles.tbody}>
                {list.length > 0 ? (
                    list.map(({ id, name, priceCant, unity, marked }) => (
                        <tr key={id} className={styles.tr}>
                            <td className={styles.tdName}>{name}</td>
                            <td className={styles.tdPriceCant}>{priceCant ? `$${priceCant}` : '-'}</td>
                            <td className={styles.tdUnity}>${unity}</td>
                            <td className={styles.tdMarked}>{marked}</td>
                            <td className={styles.tdAction}>
                                <div className={styles.iconsContainer}>
                                    <IconDelete className={styles.iconAction} onClick={() => deleteItem(id)} />
                                    <IconEdit className={styles.iconAction} onClick={() => edit(id)} />
                                </div>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="5">No hay productos disponibles</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}
