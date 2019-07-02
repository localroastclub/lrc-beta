import React from 'react';
import ReviewCarousel from './ReviewCarousel';
import './carousel.css'

const carouselSlidesData = [
  {
    content:
      "Tomorrow, you will be released. If you are bored of brawling with thieves and want to achieve something there is a rare blue flower that grows on the eastern slopes. Pick one of these flowers. If you can carry it to the top of the mountain, you may find what you were looking for in the first place.",
    author: "Bane",
    avatar: "facebook",
    location: "Austin, Tx"
  }, {
    content:
      "You have learn to bury your guilt with anger. I will teach you to confront it and to face the truth.",
    author: "Ra's Al Ghul",
    avatar: "Snapchat",
    location: "Austin, Tx"
  }, {
    content:
      "Introduce a little anarchy, upset the established order and everything becomes chaos. I'm an agent of chaos. Oh, and you know the thing about chaos? It's fair.",
    author: "Joker",
    avatar: "facebook",
    location: "Austin, Tx"
  }
];

const Reviews = () => {
  return (
    <div className="paragraph-2">
    <h2>
      What Local Roast Club Members Say:
    </h2>
    <p>
      Lorem ipsum dolor sit amet, viris populo habemus no his, eum utinam dignissim cu, 
      sed alienum euripidis ut. Te nam nulla oporteat comprehensam. Eam cu modo viris virtute, 
      ei impetus scaevola contentiones eos, eos ea ridens nominati. Mucius nostrud invenire 
      ex pro, numquam reprimique eum no, quo solum errem sententiae id.
    </p>
    <div className="carousel-container">
      <ReviewCarousel slides={carouselSlidesData} />
    </div>
  </div>
  );
};

export default Reviews;