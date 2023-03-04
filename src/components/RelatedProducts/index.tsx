import React from 'react';
import './RelatedProducts.sass';

export interface RelatedProductsProps {
  children?: React.ReactNode;
}

const RelatedProducts = (props: RelatedProductsProps) => {
  return (
    <section id='related-products'>
      <div className='title-container'>
        <div className='title-border'></div>
        <h3>Produtos relacionados</h3>
      </div>
      {props.children}
    </section>
  );
};

export default RelatedProducts;
