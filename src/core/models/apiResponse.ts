import { Product } from './product';

export interface ApiResponse {
  message: string;
  products: Product[];
}
