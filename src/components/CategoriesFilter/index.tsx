import { productsFilter } from '../../state/constants/productsFilter';
import './CategoriesFilter.sass';
import CategoryCard from './CategoryCard/index';

const CategoriesFilter = () => {
  return (
    <article className='categories-filter'>
      <ul id='product-list'>
        {productsFilter.map(({ title, image }) => (
          <CategoryCard key={title} title={title} alt={title} path={image} />
        ))}
      </ul>
    </article>
  );
};

export default CategoriesFilter;
