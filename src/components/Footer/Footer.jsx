import Image from 'next/image';
import styles from './Footer.module.css';
import { social_media } from './data';
const Footer = () => {
    return (
        <div className={styles.container}>
            <div>©2025 Mouad Bimekliouen. All rights reserved.</div>
            <div className={styles.social}>
                {social_media.map(item=>   <Image 
                key={item.id}
                src={item.media}
                width={20}
                height={20}
                className={styles.icon}
                alt={item.alt}
                />)}
              
                   
            </div>
        </div>
    );
}

export default Footer;
