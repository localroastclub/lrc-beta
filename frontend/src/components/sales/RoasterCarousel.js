import React from 'react';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import ArrowRight from '@material-ui/icons/ArrowRight';

// adapted from Alex Devero
// https://github.com/alexdevero
// https://alexdevero.com/
const { Component } = React;

const CarouselLeftArrow = props => {
  return (
    <button
      className="carousel__arrow carousel__arrow--left"
      onClick={props.onClick}
    >
      <ArrowLeft />
    </button>
  );
};

const CarouselRightArrow = props => {
  return (
    <button
      className="carousel__arrow carousel__arrow--right"
      onClick={props.onClick}
    >
      <ArrowRight />
    </button>
  );
};

const CarouselIndicator = props => {
  return (
    <li>
      <a
        className={
          props.index === props.activeIndex
            ? 'carousel__indicator carousel__indicator--active'
            : 'carousel__indicator'
        }
        onClick={props.onClick}
      />
    </li>
  );
};

const CarouselSlide = props => {
  return (
    <div
      className={
        props.index === props.activeIndex
          ? 'carousel__slide carousel__slide--active'
          : 'carousel__slide'
      }
    >
      <img
        className="carousel-slide__content"
        src={props.slide.image}
        alt={props.slide.title}
      />
    </div>
  );
};

// Carousel wrapper component
class RoasterCarousel extends Component {
  constructor(props) {
    super(props);

    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);

    this.state = {
      prevIndex: -1,
      activeIndex: 0,
      nextIndex: 1
    };
  }

  goToSlide(index) {
    this.setState({
      prevIndex: index - 1,
      activeIndex: index,
      nextIndex: index + 1
    });
  }

  goToPrevSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      prevIndex: index - 1,
      activeIndex: index,
      nextIndex: index + 1
    });
  }

  goToNextSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      prevIndex: index - 1,
      activeIndex: index,
      nextIndex: index + 1
    });
  }

  render() {
    return (
      <div className="carousel">
        <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />

        <ul className="carousel__slides">
          {this.props.slides.map((slide, index) => (
            <div className="roaster-carousel">
              <CarouselSlide
                key={index - 1}
                index={index - 1}
                activeIndex={this.state.prevIndex}
                slide={slide}
              />
              <CarouselSlide
                key={index}
                index={index}
                activeIndex={this.state.activeIndex}
                slide={slide}
              />
              <CarouselSlide
                key={index + 1}
                index={index + 1}
                activeIndex={this.state.nextIndex}
                slide={slide}
              />
            </div>
          ))}
        </ul>

        <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />

        <ul className="carousel__indicators">
          {this.props.slides.map((slide, index) => (
            <CarouselIndicator
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              isActive={this.state.activeIndex == index}
              onClick={e => this.goToSlide(index)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default RoasterCarousel;
