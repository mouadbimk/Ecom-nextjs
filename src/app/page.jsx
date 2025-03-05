import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../../public/hero.svg";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <h1 className={styles.title}>Your Best Online Shop destination!</h1>
        <p className={styles.description}>discover a world of endless shopping possibilities at our online store. Browse,Choose,and Order your favorite products from the comfort of your home</p>
        <button className={styles.button}>Shop Now</button>
      </div>
      <div className={styles.col}>
        <Image className={styles.img} src={Hero} alt="Hexa Shop"/>
      </div>
    </div>
  );
}
