import styles from './HeroLayout.module.scss'
export const HeroLayout = ({ children, bgVariant, bgImage, direction }) => {
    return (
        <main className={`${styles.heroLayout} ${styles[bgVariant]} ${bgImage ? styles.bgImage : ''}`}>
            <div className={`${styles.container} ${styles[direction]}`}>{children}</div>        </main>
    )
}