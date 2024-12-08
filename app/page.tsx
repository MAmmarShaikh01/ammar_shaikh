import Header from "@/component/Upperheader";
import Headerd from "@/component/Lowerheader";
import Footer from "@/component/Footer";
import Hero from "@/component/Homehero"
import Products from "@/component/Products"
import React from "react";

export default function Home() {
  return(
    <>
    <Header />
    <Headerd />
    <Hero />
    <Products />
    <Footer />
    </>
  )
}