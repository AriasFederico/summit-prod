import styles from './SectionLayout.module.scss'
export const SectionLayout = ({ children, bgVariant, direction }) => {
    return (
        <section className={`${styles.section} ${styles[bgVariant]}`}>
            <div className={`${styles.container} ${styles[direction]}`}>{children}</div>
        </section>
    )
}
