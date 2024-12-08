import Image from "next/image"
import style from "@/css/Homehero.module.css"

export default function Home(){
    return(
        <>
        <div className={style.hero}>
        <Image className={style.bulb} src="/img/bulb.svg" alt="image" width="387" height={387} ></Image>

        <div className={style.content}>
            <p className={style.pinkPara}>Best Furniture For Your Castle....</p>
            <h1 className={style.mainHeading}>New Furniture Collection
            Trends in 2020</h1>
            <p className={style.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
            in phasellus non in justo.</p>

            <button className={style.button}>Shop Now</button>
        </div>

        <Image className={style.sofa} src="/img/chair.svg" alt="image" width="500" height={500} ></Image>
        </div>
        </>
    )
} 