import { NextIcon } from '../icons';
import './Brand.sass';
import { BrandCard } from './BrandCard';

export const Brand = () => {
  return (
    <article className='brand-container'>
      <h2 className='brand-title'>Navegue por marcas</h2>

      <div className='brand-carousel'>
        <BrandCard />
        <BrandCard />
        <BrandCard />
        <BrandCard />
        <BrandCard />
      </div>
      <div className='carousel-btn'>{NextIcon()}</div>
    </article>
  );
};
