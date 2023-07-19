import { Connection } from 'mongoose';
import { productSchema } from './schemas/product.schema';

export const productProvider = [
  {
    provide: 'Product',
  },
];
