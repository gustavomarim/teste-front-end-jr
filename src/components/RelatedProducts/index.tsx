import React from 'react';
import './RelatedProducts.sass';

export interface RelatedProductsProps {
  children?: React.ReactNode;
  marginBottom?: number;
}

const RelatedProducts = (props: RelatedProductsProps) => {
  return (
    <section
      style={{ marginBottom: `${props.marginBottom}px` }}
      id='related-products'
    >
      <div className='title-container'>
        <div className='title-border'></div>
        <h3>Produtos relacionados</h3>
      </div>
      {props.children}
    </section>
  );
};

export default RelatedProducts;
