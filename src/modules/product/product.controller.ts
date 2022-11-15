import { Controller, Get } from '@nestjs/common';
import { ProductService } from './Product.service';

@Controller()
export class ProductController {
  constructor(private readonly ProductService: ProductService) {
    
  }

  @Get()
  getHello() {

  }
}
