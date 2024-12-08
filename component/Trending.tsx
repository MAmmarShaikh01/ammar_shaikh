import style from "@/css/Trending.module.css"
import Link from "next/link"
import Image from "next/image"
import Products from "@/component/Products"


export default function Home (){
    return(
        <>
        <main className={style.main}>
        <h1 className={style.heading}>Trending Products</h1>
        <Products />

        <div className={style.shopping}>
        <div className={style.card}>
        <h1 className={style.product}>23% off in all products</h1>
        <Link href="./">
        Shop Now
        </Link>
         <Image className={style.sofa} src="/img/clock.svg" alt="image" width="200" height={200} ></Image>
        </div>

        <div className={style.card}>
        <h1 className={style.product}>23% off in all products</h1>
        <Link href="./">
        View Collection
        </Link>
         <Image className={style.table} src="/img/table.svg" alt="image" width="200" height={200} ></Image>
        </div>
        <div className={style.card}>
        <h1 className={style.product}>23% off in all products</h1>
        <Link href="./">
        View Collection
        </Link>
         <Image className={style.table} src="/img/chair2.svg" alt="image" width="200" height={200} ></Image>
        </div>
        </div>
        </main>
        </>
    )
}