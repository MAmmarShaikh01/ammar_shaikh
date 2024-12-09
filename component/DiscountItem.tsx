import style from "@/css/Discountitem.module.css"
import Image from "next/image"


export default function Home (){
    return(
        <>
       <h1 className={style.heading}>Discount Item</h1>
       <main className={style.main}>
            <ul className={style.ul}>
                <li className={style.li}>Wood Chair</li>
                <li className={style.li}>Plastic Chair</li>
                <li className={style.li}>Plastic Chair</li>
                <li className={style.li}>Sofa Colletion</li>
            </ul>

            <div className={style.cont}>

                <div className={style.left}>

                <h1 className={style.product}>20% Discount Of All Products</h1>
                <p className={style.despink}>Eams Sofa Compact</p>
                <p className={style.des2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                <ul className = {style.ulProduct}>
                    <li className={style.liProduct}>Material expose like metals</li>
                    <li className={style.liProduct}>Clear lines and geomatric figures</li>
                    <li className={style.liProduct}>Simple neutral colours.</li>
                    <li className={style.liProduct}>Material expose like metals</li>
                </ul>
                </div>
                <Image className={style.chair} src="/img/woodchair.svg" alt="Wood Chair" width={200} height={200} />
                
            </div>
       </main>
        </>
    )
}