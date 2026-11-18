import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Sepatu Ecoprint',
      description: 'Sepatu dengan aksen motif daun alami.',
      price: 275000,
      category: 'Fashion',
      stock: 8,
    },
    {
      id: 2,
      name: 'Kain Ecoprint Liora',
      description: 'Kain bermotif alami dengan karakter unik.',
      price: 185000,
      category: 'Kain',
      stock: 12,
    },
    {
      id: 3,
      name: 'Tas Motif Daun',
      description: 'Tas kain dengan sentuhan motif botani.',
      price: 145000,
      category: 'Aksesori',
      stock: 6,
    },
    {
      id: 4,
      name: 'Kipas Ecoprint',
      description: 'Kipas dekoratif dengan pola tumbuhan.',
      price: 65000,
      category: 'Aksesori',
      stock: 15,
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