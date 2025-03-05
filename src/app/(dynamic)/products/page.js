import Image from "next/image";
import Link from "next/link";
import styles from "./products.module.css";
export const metadata = {
    title: "Hexa Shop - Products Page",
    description: "Your one stop shop for all your needs. We have everything you need from electronics to groceries.",
  }
const apiUrl = process.env.NEXT_PUBLIC_PRODUCTS_API_URL;
    async function getProducts(){
        const res = await fetch(`${apiUrl}`);
        if(!res.ok){
            throw new Error('Failed to fetch products');
        }
        return res.json();
    }
export default async function Products () {
    const data = await getProducts();
    return (
        <div className={styles.container}>
            {data.products.map((product)=>(
                <Link key={product.id} href={`/products/${product.id}`} className={styles.product}>
            <div className={styles.imageContainer}>
                <Image 
                className={styles.image}
                src={product.thumbnail}
                width={350}
                height={250}
                alt={product.title}
                />
            </div>
            <div className={styles.content}>
                    <h1 className={styles.title}>{product.title}</h1>
                    <p className={styles.text}>{product.description}</p>
                </div>
            </Link>
            ))}
                
        </div>
    );
}
