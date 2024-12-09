import Header from "@/component/Upperheader";
import Headerd from "@/component/Lowerheader";
import Footer from "@/component/Footer";
import Hero from "@/component/Homehero"
import Pro from "@/component/Featureproducts"
import Latest from "@/component/Latestproducts"
import Offe from "@/component/Whatoffers"
import Trending from "@/component/Trending"
import Feature from "@/component/Uniquefeatures"
import Discount from "@/component/DiscountItem"
import Topcat from "@/component/Topcategories"
import React from "react";

export default function Home() {
  return(
    <>
    <Header />
    <Headerd />
    <Hero />
    <Pro />
    <Latest />
    <Offe />
    <Feature />
    <Trending />
    <Discount />
    <Topcat />
    <Footer />
    </>
  )
}