import Link from "next/link";
import styles from './NabBar.module.css';
import { Links } from './data';
import Button from "../../app/elements/Button/Button";
import Logo from "@/app/elements/Logo/Logo";
const NavBar = () => {
    return (
        <div className={styles.container}>
            <Logo/>
            <div className={styles.links}>
                    {Links.map(link=>
                        <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
                    )}
                    <Button/>
            </div>
        </div>

    );
}

export default NavBar;
