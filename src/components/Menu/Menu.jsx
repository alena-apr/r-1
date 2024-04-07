import { Link } from "react-router-dom";
import styles from './menu.module.scss'

export default function Menu() {
    const MENU = [
        { title: "На главную", to: "/" },
        { title: "To do list", to: "/todo" },
        { title: "Form", to: "/form" },
        { title: "L3", to: "/l3" },
        { title: "L4", to: "/l4" },
        { title: "L5", to: "/l5" },
        { title: "L6", to: "/l6" },
        { title: "L7", to: "/l7" },
        { title: "L8??", to: "/l8" }
    ];
    return (
        <nav className = {styles['header-nav']}>
            {MENU.map(({title, to}, i) => (
                <Link className = {styles['header-nav__item']} key={`${i}-menu-item`} to={to}>{title}</Link>
            ))}
        </nav>
    )
}