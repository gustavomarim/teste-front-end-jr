import './RelatedProductsFilter.sass';

export interface RelatedProductsFilterProps {
  relatedProducts: string[];
}

const RelatedProductsFilter = (props: RelatedProductsFilterProps) => {
  return (
    <ul id='product-filter'>
      {props.relatedProducts.map((productFilter, index) => (
        <li
          id={productFilter}
          className={index === 0 ? 'active' : ''}
          key={productFilter.trim()}
        >
          {productFilter.toUpperCase()}
        </li>
      ))}
    </ul>
  );
};

export default RelatedProductsFilter;
