import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Kain Ecoprint Shibori',
      description: 'Kain katun ecoprint motif alam manual',
      price: 150000,
      category: 'Kain',
      stock: 10,
    },
  ];

  create(createProductDto: CreateProductDto): Product {
    const newProduct = {
      id: Date.now(),
      ...createProductDto,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      throw new NotFoundException(`Produk dengan ID ${id} tidak ditemukan.`);
    }
    return product;
  }

  update(id: number, updateProductDto: UpdateProductDto): Product {
    const product = this.findOne(id);
    Object.assign(product, updateProductDto);
    return product;
  }

  remove(id: number) {
    const index = this.products.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new NotFoundException(`Produk dengan ID ${id} tidak dapat dihapus karena tidak ditemukan.`);
    }
    this.products.splice(index, 1);
    return { message: `Produk dengan ID ${id} berhasil dihapus` };
  }
}