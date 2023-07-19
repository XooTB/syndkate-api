import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly ProductService: ProductService) {}

  //   product/search?title='string' => []
  @Get('search')
  async findOne(@Query('title') title: 'string') {
    return await this.ProductService.search(title);
  }

  // product/:id => {}
  @Get(':id')
  async getDetails(@Param('id') id: 'string') {
    return await this.ProductService.details(id);
  }
}
