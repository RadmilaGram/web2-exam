import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "./product.create.dto";
import { UpdateProductDto } from "./product.update.dto";

@Injectable({})
export class ProductsService {

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

    getProducts(): string {
        return JSON.stringify(this.products);
    }

    getProductById(id: string): string {
        return JSON.stringify(this.products.find(product => product.id === id));
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