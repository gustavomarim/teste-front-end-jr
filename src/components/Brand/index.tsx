import './Brand.sass';
import { BrandCard } from './BrandCard';

export const Brand = () => {
  return (
    <article className='brand-container'>
      <h1 className='brand-title'>Navegue por marcas</h1>

      <div className='brand-carousel'>
        <BrandCard />
        <BrandCard />
        <BrandCard />
        <BrandCard />
        <BrandCard />
      </div>
    </article>
  );
};
