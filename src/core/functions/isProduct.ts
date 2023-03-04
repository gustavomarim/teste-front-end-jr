import { Product } from '../models/product';

function isProduct(product: unknown): product is Product {
  if (
    product &&
    typeof product === 'object' &&
    'productName' in product &&
    'descriptionShort' in product &&
    'photo' in product &&
    'price' in product
  )
    return true;
  return false;
}

export default { isProduct };
