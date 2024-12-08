import style from "@/css/Uniquefeature.module.css"
import Image from "next/image"


export default function Home (){
    return(
        <>
        <main className={style.main}>
         <Image className={style.sofa} src="/img/sofa2.svg" alt="image" width="550" height={550} ></Image>
        
        </main>
        </>
    )
}