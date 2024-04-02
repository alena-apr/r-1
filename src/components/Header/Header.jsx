import styles from './header.module.scss'
import Menu from "../Menu/Menu"

export default function Header() {
    return (
        <header className={styles['header']}>
            <div className={styles["logo"]}>
                <span>React</span>
            </div>
            <Menu />
        </header>
    )
    
}