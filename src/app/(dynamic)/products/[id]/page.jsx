import Image from "next/image";
import styles from "./Product.module.css";

async function getDetailsPost(id){
    const apiUrl = process.env.NEXT_PUBLIC_PRODUCTS_API_URL;
    const res = await fetch(`${apiUrl}/${id}`);
    if(!res.ok){
        throw new Error('Failed to fetch data');
    }
    return res.json();
}
export async function generateMetadata({params}){
    const {id} = await params;
    const product = await getDetailsPost(id);
    return {
        title: `${product.title} - Hexa Shop`,
        description: product.description,
    }
   
}

export default async function SingleProduct({params}) {
    const {id} = await params;
    const data = await getDetailsPost(id);
    return (
        <div className={styles.container}>
           <header className={styles.header}>
            <div className={styles.info}>
                <h1 className={styles.title}>{data.title}</h1>
                <p className={styles.desc}><b>Category:</b> {data.category}</p>
            </div>
            <div className={styles.imageContainer}>
                <Image
                className={styles.image}
                src={data.images[0] ? data.images[0] : data.thumbnail}
                alt="post image"
                fill={true}
                />
                <span className={styles.author}>{data.price} $</span>
            </div>
           </header>
           <div className={styles.content}>
            <div className={styles.gallery}>{data.images.map((image,index) => (
                <Image
                className={styles.image}
                    key={index + 1}
                    src={image}
                    alt={data.title}
                    width={150}
                    height={150}
                />
            ))}
            </div>
            <p className={styles.desc}>{data.description}</p>
           </div>
        </div>
    );
}