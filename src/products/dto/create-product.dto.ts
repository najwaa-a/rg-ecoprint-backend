import { IsNotEmpty, IsString, Min, MinLength, IsNumber } from "class-validator";

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3, { message: 'Nama produk minimal harus 3 karakter' })
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNumber()
    @Min(0, { message: 'Harga produk harus lebih besar dari atau sama dengan 0' })
    price: number;

    @IsString()
    @IsNotEmpty()
    category: string;

    @IsNumber()
    @Min(0, { message: 'Stok produk harus lebih besar dari atau sama dengan 0' })
    stock: number;
}
