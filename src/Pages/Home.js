import React from 'react'
import Headers from "../Components/Header"
import ProductFeatureSection from '../Components/FeatureSection'
import PopularProducts from '../Components/ProductSection'
import Footer from '../Components/Footer'
import Carasuel from '../Components/Carasuel'
export default function Home() {
  return (
    <div>
      <Headers></Headers>
      <Carasuel></Carasuel>
      <ProductFeatureSection></ProductFeatureSection>
      <PopularProducts></PopularProducts>
      <Footer></Footer>
    </div>
  )
}
