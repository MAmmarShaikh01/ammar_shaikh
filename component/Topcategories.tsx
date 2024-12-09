import style from "@/css/Discountitem.module.css"
import Products from "@/component/Products"
export default function Home (){
    return(
        <>
       <h1 className={`${style.heading}`}>Top Categories</h1>
       <Products />

        </>
    )
}