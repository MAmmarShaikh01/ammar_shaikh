
import style from "@/css/Featureproducts.module.css"
import Product from "@/component/Products"


export default function Home (){
    return(
        <>
         <main className={style.main}>
            <h1 className={style.heading}>Featured Products</h1>
            <Product />
         </main>
        </>
    )
}