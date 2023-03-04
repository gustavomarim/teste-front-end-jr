import { ArrowLeft, ArrowRight } from '../icons';
import './Carousel.sass';

export interface CarouselProps {
  children?: React.ReactNode;
}

const Carousel = (props: CarouselProps) => {
  const ImagePadding = 20;
  const scrollPerClick = 270 + ImagePadding;
  let scrollAmount = 0;
  const sliders: Element | null = document.querySelector('.carousel-box');

  function sliderScrollLeft(): void {
    sliders?.scrollTo({
      top: 0,
      left: (scrollAmount -= scrollPerClick),
      behavior: 'smooth',
    });

    if (scrollAmount < 0) scrollAmount = 0;
  }

  function sliderScrollRight(): void {
    if (sliders)
      if (scrollAmount <= sliders?.scrollWidth - sliders?.clientWidth) {
        sliders?.scrollTo({
          top: 0,
          left: (scrollAmount += scrollPerClick),
          behavior: 'smooth',
        });
      }
  }

  return (
    <div id='carousel'>
      <div className='carousel-box'>{props.children}</div>

      <button className='switchLeft' onClick={sliderScrollLeft}>
        <ArrowLeft />
      </button>

      <button className='switchRight' onClick={sliderScrollRight}>
        <ArrowRight />
      </button>
    </div>
  );
};

export default Carousel;
