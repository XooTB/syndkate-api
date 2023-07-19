import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { productSchema } from './schemas/product.schema';
import { ProductService } from './product.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ schema: productSchema, name: 'Product' }]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
