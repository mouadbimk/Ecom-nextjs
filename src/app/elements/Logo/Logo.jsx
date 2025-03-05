import Link from 'next/link';
import styles from './Logo.module.css';

const Logo = () => {
    return (
        <Link href='/' className={`${styles.logo}`}>HEXASHOP</Link>
    );
}

export default Logo;
