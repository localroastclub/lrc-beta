import React from 'react';
import RoasterCarousel from './RoasterCarousel';
import './carousel.css';
import AustinRoasting from '../../images/austinroastcompany.png';
import Barretts from '../../images/barretts.jpg';
import GreaterGoods from '../../images/greatergoods.png';

const carouselSlidesData = [
  {
    title: 'Austin Roasting Company',
    image: AustinRoasting
  },
  {
    title: "Barrett's",
    image: Barretts
  },
  {
    title: 'Greater Goods',
    image: GreaterGoods
  }
];

const Roasters = () => {
  return (
    <div className="paragraph-2">
      <div className="carousel-container">
        <RoasterCarousel slides={carouselSlidesData} />
      </div>
    </div>
  );
};

export default Roasters;
