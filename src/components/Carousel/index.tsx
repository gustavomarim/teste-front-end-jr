import { ArrowLeft, ArrowRight } from '../icons';
import './Carousel.sass';

export interface CarouselProps {
  children?: React.ReactNode;
  id: string;
}

const Carousel = (props: CarouselProps) => {
  const imagePadding = 20;

  const widthCard = 270;
  const scrollPerClick = widthCard + imagePadding;
  let scrollAmount = 0;

  /*
   * Cada slider precisa ter um id distinto para ser referenciado
   * para que o componente possa ser reutilizado.
   */
  const sliders: Element | null = document.getElementById(props.id);

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
      <div id={props.id} className='carousel-box'>
        {props.children}
      </div>

      <button
        className='switchLeft'
        onClick={sliderScrollLeft}
        aria-label='slide image to left'
      >
        <ArrowLeft />
      </button>

      <button
        className='switchRight'
        onClick={sliderScrollRight}
        aria-label='slide image to right'
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default Carousel;
