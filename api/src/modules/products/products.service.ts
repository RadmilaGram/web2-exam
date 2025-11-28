import { HttpException, Injectable } from "@nestjs/common";
import { CreateProductDto } from "./product.create.dto";
import { UpdateProductDto } from "./product.update.dto";
import { Repository } from "typeorm";
import { Product } from "./product.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable({})
export class ProductsService {

    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>
    ) {}

    private products = [{
        id: '1',
        name: 'Sample Product',
        price: 100
    },
    {
        id: '2',
        name: 'Another Product',
        price: 150
    }
    ];

    async getProducts(): Promise<Product[]> {
        return await this.productRepository.find();
    }

    async getProductById(id: number): Promise<Product> {
        try {
            return await this.productRepository.findOneByOrFail({id});
        } catch (error) {
            throw new HttpException('Product not found', 404);
        }
    }

    async createProduct(createProductDto: CreateProductDto): Promise<Product> {
        return await this.productRepository.save(createProductDto);
    }

    async updateProduct(id: string, updateProductDto: UpdateProductDto): Promise<Product>  {
        return await this.productRepository.save({
            id: +id,
            ...updateProductDto
        });
    }

    partiallyUpdateProduct(id: string, updateProductDto: UpdateProductDto): string {
        const product = this.products.find(product => product.id === id);
        if (product) {
            product.price = updateProductDto.price ?? product.price;
            product.name = updateProductDto.name ?? product.name;
        }

        return JSON.stringify(product);
    }

    async deleteProduct(id: string): Promise<Product> {
        return await this.productRepository.remove(await this.getProductById(+id));
    }
}