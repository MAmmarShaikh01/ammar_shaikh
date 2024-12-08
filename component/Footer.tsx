import style from "@/css/Footer.module.css"
import Link from "next/link"
export default function Footer(){
    return (
        <footer className={style.footer}>
            <div className={`${style.cont1} ${style.cont}`}>
                <h1 className={style.logo}>Hekto</h1>
                <div className={style.search}>
                    <input className={style.input} type="text" placeholder="Search..."/>
                    <button className={style.signup}>Sign Up</button>
                </div>
                <div className={style.contact}>
                    <p> Contact Info </p>
                    <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                </div>
            </div>

            <div className={`${style.cont2} ${style.cont}`}>
                <h1 className={style.heading}>
                    Categories
                </h1>
                <Link className={style.links} href="./">Laptops & Computers</Link>
                <Link className={style.links} href="./">Cameras & Photography</Link>
                <Link className={style.links} href="./">Smart Phones & Tablets</Link>
                <Link className={style.links} href="./">Video Games & Consoles</Link>
                <Link className={style.links} href="./">Waterproof Headphones</Link>
            </div>
            <div className={`${style.cont3} ${style.cont}`}>
                <h1 className={style.heading}>
                Customer Care
                </h1>
                <Link className={style.links} href="./">My Account</Link>
                <Link className={style.links} href="./">Discount</Link>
                <Link className={style.links} href="./">Returns</Link>
                <Link className={style.links} href="./">Orders History</Link>
                <Link className={style.links} href="./">Order Tracking</Link>

            </div>
            <div className={`${style.cont4} ${style.cont}`}>
            <h1 className={style.heading}>
            Pages
                </h1>
                <Link className={style.links} href="./">Blog</Link>
                <Link className={style.links} href="./">Browse the Shop</Link>
                <Link className={style.links} href="./">Category</Link>
                <Link className={style.links} href="./">Pre-Built Pages</Link>
                <Link className={style.links} href="./">Visual Composer Elements</Link>
                <Link className={style.links} href="./">WooCommerce Pages</Link>
            </div>
        </footer>
    )
}