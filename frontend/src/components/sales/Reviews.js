import React from 'react';
import ReviewCarousel from './ReviewCarousel';
import './carousel.css';

const carouselSlidesData = [
  {
    title: 'Consistently Great Coffee and Service',
    content:
      'I have lived in Austin for over six years, and the local coffee scene was one of my first loves of the city. I have been ordering coffee from Local Roast Club for almost a year, and the love has truly been rekindled. Local Roast Club offers a HUGE selection from the best roasters in the area. Many of the roasts I get are those used by my beloved coffee shops around town. However, I’ve definitely branched out and found new favorites to order alongside my usuals. Another amazing aspect of Local Roast Club is that the coffee beans are roasted just days before I receive them, making for incredibly fresh and smooth brews. Lastly, the fact that I don’t have to make extra trips to the grocery store just for mediocre coffee is life-changing. I love the convenience of having local coffee delivered to my house!',
    author: 'Katherine',
    avatar: 'facebook',
    location: 'Austin, Tx'
  },
  {
    title: 'Decafs from all around',
    content:
      "I'm only drinking decaf these days, so it's nice to be able to try decaf from roasters all over town!",
    author: 'Meredith',
    avatar: 'Snapchat',
    location: 'Austin, Tx'
  },
  {
    title: 'Convenient and Quality!',
    content:
      'I was interested in buying local coffee but I never had time to go to actual coffee shops all the time when I ran out of beans. This service is convenient and quality with an emphasis on the local peeps. I would highly reccomend trying it out if you like good coffee at home!',
    author: 'Sam',
    avatar: 'facebook',
    location: 'Fort Worth, Tx'
  }
];

const Reviews = () => {
  return (
    <div className="paragraph-2">
      <h2>What Local Roast Club Members Say:</h2>
      <div className="carousel-container">
        <ReviewCarousel slides={carouselSlidesData} />
      </div>
    </div>
  );
};

export default Reviews;
