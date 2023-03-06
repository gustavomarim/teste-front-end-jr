import React from 'react';
import _ from '../../../core/functions/_';
import Button from '../../shared/Button/index';
import './ProductCard.sass';

export interface ProductCardProps {
  id: string;
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const ProductCard = (props: ProductCardProps) => {
  const pricePlus6Percent = props.price + props.price * 0.06;

  return (
    <div id={props.id} className='card' onClick={props.onClick}>
      <div className='product-image'>
        <img
          src={props.photo}
          alt={props.productName}
          width={247}
          height={228}
        />
      </div>
      <div className='product-info'>
        <p className='product-resume'>{props.descriptionShort}</p>
        <span className='old-price'>
          {_.convert.numberToReal(pricePlus6Percent)}
        </span>
        <span className='new-price'>{_.convert.numberToReal(props.price)}</span>
        <p className='installment-price'>
          ou 2x de {_.convert.numberToReal(props.price / 2)} sem juros
        </p>
        <span className='delivery-price'>Frete grátis</span>

        <Button
          borderRadius={4}
          fontSize={14}
          width={245}
          height={44}
          fontWeight={700}
        >
          COMPRAR
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
