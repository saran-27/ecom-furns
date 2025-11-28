import React from 'react'
import TopHeader from './TopHeader/TopHeader';
import NavBars from'../NavBars';
import Slider  from './Slider/Slider';
import CardGallery from './CardGallery/CardGallery';
import SmallSection from './SmallSection/SmallSection';
import ProductsCard from './ProductsCard/ProductsCard';
import HomeDesignSlider from './SliderTransition/HomeDesignSlider';
import OurService from './OurService/OurService';
import FooterSection from './FooterSection/FooterSection';

function Home() {
  return (
     <div>
        <TopHeader></TopHeader>
      <NavBars></NavBars>
      <Slider></Slider>
      <CardGallery></CardGallery>
      <SmallSection></SmallSection>
      <ProductsCard></ProductsCard>
      <HomeDesignSlider></HomeDesignSlider>
      <OurService></OurService>
      <FooterSection></FooterSection>
     
     </div>
  )
}

export default Home;