
import style from "@/css/Whatoffers.module.css"
import Image from "next/image"

export default function Home (){
    return(
        <>
         <main className={style.main}>
            <h1 className={style.heading}>What Shopex Offer!</h1>
            <div className={style.cont}>
            <div className={style.card}>
            <Image className={style.cardImg} src="/img/truck.svg" alt="image" width="65" height={65} ></Image>
            <h1 className={style.heading}>24/7 Support</h1>
            <p className={style.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
            <div className={style.card}>
            <Image className={style.cardImg} src="/img/coin.svg" alt="image" width="65" height={65} ></Image>
            <h1 className={style.heading}>24/7 Support</h1>
            <p className={style.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
            <div className={style.card}>
            <Image className={style.cardImg} src="/img/medal.svg" alt="image" width="65" height={65} ></Image>
            <h1 className={style.heading}>24/7 Support</h1>
            <p className={style.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
            <div className={style.card}>
            <Image className={style.cardImg} src="/img/247.svg" alt="image" width="65" height={65} ></Image>
            <h1 className={style.heading}>24/7 Support</h1>
            <p className={style.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
            </div>
         </main>
        </>
    )
}