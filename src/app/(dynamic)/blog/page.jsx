import Link from 'next/link';
import styles from './Blogs.module.css';
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const urlApi = process.env.NEXT_PUBLIC_BLOG_API_URL
async function getBlogs(){
    const blogs = await fetch(`${urlApi}&apiKey=${apiKey}`);
    if(!blogs.ok){
        throw new Error('Failed to fetch blogs');
    }
    return blogs.json();
}
export default async function Blog (){
    const data = await getBlogs();

    return (
        <div className={styles.mainContainer}>
            {data.articles.map((blog,index) => (
                <Link key={index} href={`/blog/${blog.source.name}`} className={styles.post}>
            <div className={styles.imageContainer}>
                <img 
                className={styles.image}
                src={blog.urlToImage}
                width={350}
                height={250}
                alt='post image'
                />
            </div>
            <div className={styles.content}>
                    <h1 className={styles.title}>{blog.title}</h1>
                    <p className={styles.text}>{blog.description}</p>
                </div>
            </Link>
            ))}
        </div>
    );
}
