import Image from "next/image"
import style from "@/css/Products.module.css"
export default function Home() {
    return(
      <>
      <div className={style.card}>
      <Image className={style.cardImg} src="/img/product1.svg" alt="image" width="200" height={200} ></Image>
      </div>
      </>
    )
  }