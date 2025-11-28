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
            return {id: 0, name: 'Not Found', price: 0};    
        }
        
    }

    createProduct(createProductDto: CreateProductDto): string {
        this.products.push({
            id: (this.products.length + 1).toString(),
            name: createProductDto.name,
            price: createProductDto.price
        });
        
        return JSON.stringify(this.products[this.products.length - 1]);
    }

    updateProduct(id: string, updateProductDto: UpdateProductDto): string {
        const product = this.products.find(product => product.id === id);
        if (product) {
            product.name = updateProductDto.name ?? product.name;
            product.price = updateProductDto.price ?? product.price;
        }

        return JSON.stringify(product);
    }

    partiallyUpdateProduct(id: string, updateProductDto: UpdateProductDto): string {
        const product = this.products.find(product => product.id === id);
        if (product) {
            product.price = updateProductDto.price ?? product.price;
            product.name = updateProductDto.name ?? product.name;
        }

        return JSON.stringify(product);
    }

    deleteProduct(id: string): string {
        const productIndex = this.products.findIndex(product => product.id === id);
        if (productIndex > -1) {
            this.products.splice(productIndex, 1);
        }

        return JSON.stringify(this.products);
    }
}