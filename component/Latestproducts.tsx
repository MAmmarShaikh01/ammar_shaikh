import style from "@/css/Featureproducts.module.css"
import styles from "@/css/Latestproducts.module.css"
import Product from "@/component/Products"


export default function Home (){
    return(
        <>
         <main className={style.main}>
            <h1 className={style.heading}>Latest Products</h1>
            <ul className={styles.ul}>
                <li className={styles.li}>New Arrival</li>
                <li className={styles.li}>Best Seller</li>
                <li className={styles.li}>Featured</li>
                <li className={styles.li}>Special Offer</li>
            </ul>
            <Product />
            <Product />
         </main>
        </>
    )
}