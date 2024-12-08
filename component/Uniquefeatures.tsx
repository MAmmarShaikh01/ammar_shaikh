import style from "@/css/Uniquefeature.module.css"
import Image from "next/image"


export default function Home (){
    return(
        <>
        <main className={style.main}>
         <Image className={style.sofa} src="/img/sofa2.svg" alt="image" width="550" height={550} ></Image>
        <div className={style.cont}>
            <h1 className={style.heading}>Unique Features Of leatest & Trending Poducts</h1>

            <ul className={style.ul}>
                <li className={style.li}>All frames constructed with hardwood solids and laminates</li>
                <li className={style.li}>Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</li>
                <li className={style.li}>Arms, backs and seats are structurally reinforced</li>
                <div className={style.btndiv}>
                    <button className={style.btn}>Add To Cart</button>
                    <div className={style.btnSide}>
                        <p>B&B Italian Sofa </p>
                        <p>$32.00</p>
                    </div>
                </div>
            </ul>
        </div>
        </main>
        </>
    )
}