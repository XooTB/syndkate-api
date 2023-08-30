import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { productSchema } from './schemas/product.schema';

@Injectable()
export class ProductService {
  constructor(@InjectModel('Product') private Product) {}

  async search(query: string) {
    const products = await this.Product.find({
      productTitle: { $regex: query, $options: 'i' },
    });

    if (!products.length) {
      throw new HttpException(
        'No Products found. Please try changing the query.',
        HttpStatus.NOT_FOUND,
      );
    }
    return products;
  }

  async details(id: string) {
    return this.Product.findOne({
      _id: id,
    });
  }
}
