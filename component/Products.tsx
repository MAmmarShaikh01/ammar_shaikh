import Image from "next/image"
import style from "@/css/Products.module.css"
export default function Home() {
    return(
      <>
      <div className={style.cardContainer}>

      <div className={style.card}>
        <div className={style.imgCont}>
      <Image className={style.cardImg} src="/img/product1.svg" alt="image" width="200" height={200} ></Image>
        </div>
      <h1 className={style.heading}>Cantilever chair</h1>
      <p className= {style.productCode}>Code - Y523201</p>
      <p className= {style.productPrice}>$42.00</p>
      </div>
      

      <div className={style.card}>
        <div className={style.imgCont}>
      <Image className={style.cardImg} src="/img/product1.svg" alt="image" width="200" height={200} ></Image>
        </div>
      <h1 className={style.heading}>Cantilever chair</h1>
      <p className= {style.productCode}>Code - Y523201</p>
      <p className= {style.productPrice}>$42.00</p>
      </div>

      <div className={style.card}>
        <div className={style.imgCont}>
      <Image className={style.cardImg} src="/img/product1.svg" alt="image" width="200" height={200} ></Image>
        </div>
      <h1 className={style.heading}>Cantilever chair</h1>
      <p className= {style.productCode}>Code - Y523201</p>
      <p className= {style.productPrice}>$42.00</p>
      </div>
      </div>

      </>
    )
  }