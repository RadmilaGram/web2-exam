import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { CreateProductDto } from "./product.create.dto";
import { UpdateProductDto } from "./product.update.dto";
import { ApiTags } from "@nestjs/swagger/dist/decorators/api-use-tags.decorator";
import { Product } from "./product.entity";

@Controller('products')
@ApiTags('Products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService) {}

    @Get('')
    async getProducts(): Promise<Product[]> {
        return await this.productsService.getProducts();
    }

    @Get(':id')
    async getProductById(@Param('id') id: string): Promise<Product> {
        return await this.productsService.getProductById(+id);
    }

    @Post('')
    async createProduct(@Body() createProductDto: CreateProductDto): Promise<Product> {
        return await this.productsService.createProduct(createProductDto);
    }

    @Put(':id')
    async updateProduct(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto): Promise<Product> {
        return await this.productsService.updateProduct(id, updateProductDto);
    }

    @Patch(':id')
    partiallyUpdateProduct(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto): string {
        return this.productsService.partiallyUpdateProduct(id, updateProductDto);
    }

    @Delete(':id')
    async deleteProduct(@Param('id') id: string): Promise<Product> {
        return await this.productsService.deleteProduct(id);
    }
}