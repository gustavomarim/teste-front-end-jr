import isProduct from './isProduct';
import numberToReal from './numberToReal';
import objects from './objects';

export default class _ {
  static readonly obj = objects;
  static readonly isPrd = isProduct;
  static readonly convert = numberToReal;
}
