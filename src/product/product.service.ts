import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { productSchema } from './schemas/product.schema';

@Injectable()
export class ProductService {
  constructor(@InjectModel('Product') private Product) {}

  async search(query: string) {
    return this.Product.find({
      productTitle: { $regex: query, $options: 'i' },
    });
  }

  async details(id: string) {
    return this.Product.findOne({
      _id: id,
    });
  }
}
