import React, { useEffect, useState } from 'react';
import './App.sass';
import { AdCard } from './components/AdCard';
import Carousel from './components/Carousel';
import CategoriesFilter from './components/CategoriesFilter';
import { Flex } from './components/layout/Flex';
import { Modal } from './components/Modal';
import { ModalProductCard } from './components/Product/ModalProductCard';
import ProductCard from './components/Product/ProductCard/index';
import Promotion from './components/Promotion/index';
import RelatedProducts from './components/RelatedProducts/index';
import RelatedProductsFilter from './components/RelatedProducts/RelatedProductsFilter/index';
import Header from './components/template/Header/index';
import { Product } from './core/models/product';
import { apiUrl } from './state/constants/apiUrl';
import { relatedProductsFilterTitle } from './state/constants/relatedProductsFilter';
import useFetch from './state/hooks/useFetch';

function App() {
  const { data, request } = useFetch();

  const [products, setProducts] = useState<Product[]>();
  const [product, setProduct] = useState<Product[]>();

  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    request(apiUrl);
  }, [request]);

  useEffect(() => {
    if (data) setProducts(data.products);
  }, [data]);

  function handleProduct(e: React.MouseEvent<HTMLDivElement>): void {
    const productID = e.currentTarget.id;

    const product = products?.filter(({ productName }) =>
      productName.includes(productID),
    );

    setProduct(product);
    setOpenModal(true);
  }

  return (
    <>
      <Header />
      <Promotion />
      <CategoriesFilter />
      <RelatedProducts>
        <RelatedProductsFilter relatedProducts={relatedProductsFilterTitle} />
        <Carousel>
          {products
            ? products.map((product: Product) => (
                <ProductCard
                  key={product.productName}
                  id={product.productName}
                  productName={product.productName}
                  descriptionShort={product.descriptionShort}
                  photo={product.photo}
                  price={product.price}
                  onClick={handleProduct}
                />
              ))
            : ''}
        </Carousel>
        <Modal isOpen={openModal} setOpenModal={() => setOpenModal(!openModal)}>
          {product ? (
            <ModalProductCard
              setOpenModal={() => setOpenModal(!openModal)}
              product={product}
            />
          ) : (
            ''
          )}
        </Modal>

        <Flex direction='row' gap={105} padding={'0 82px'} wrap={'nowrap'}>
          <AdCard
            title={'Parceiros'}
            content={'Lorem ipsum dolor sit amet, consectetur'}
            borderRadius={'20px'}
            padding={'114px 40px 40px 40px'}
          />
          <AdCard
            title={'Parceiros'}
            content={'Lorem ipsum dolor sit amet, consectetur'}
            borderRadius={'20px'}
            padding={'114px 40px 40px 40px'}
          />
        </Flex>
      </RelatedProducts>
    </>
  );
}

export default App;
