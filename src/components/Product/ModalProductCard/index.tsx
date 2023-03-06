import _ from '../../../core/functions/_';
import { Product } from '../../../core/models/product';
import { CloseIcon } from '../../icons';
import './ModalProductCard.sass';

export interface ModalProductCardProps {
  product: Product[];
  setOpenModal: () => void;
}

export const ModalProductCard = (props: ModalProductCardProps) => {
  return (
    <>
      {props.product
        ? props.product.map((product) => (
            <div
              id={product.productName}
              key={product.productName}
              className='modal-card'
            >
              <div className='product-image'>
                <img src={product.photo} alt={product.productName} />
              </div>

              <div className='product-info'>
                <h2 className='product-name'>{product.productName}</h2>
                <p className='product-price'>
                  {_.convert.numberToReal(product.price)}
                </p>
                <p className='product-description'>
                  {product.descriptionShort}
                </p>

                <a href='#'>{'Veja mais detalhes do produto >'}</a>
              </div>

              <button onClick={props.setOpenModal}>
                <CloseIcon />
              </button>
            </div>
          ))
        : null}
    </>
  );
};
