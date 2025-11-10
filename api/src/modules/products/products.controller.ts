import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { CreateProductDto } from "./product.create.dto";
import { UpdateProductDto } from "./product.update.dto";
import { ApiTags } from "@nestjs/swagger/dist/decorators/api-use-tags.decorator";

@Controller('products')
@ApiTags('Products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService) {}

    @Get('')
    getProducts(): string {
        return this.productsService.getProducts();
    }

    @Get(':id')
    getProductById(@Param('id') id: string): string {
        return this.productsService.getProductById(id);
    }

    @Post('')
    createProduct(@Body() createProductDto: CreateProductDto): string {
        return this.productsService.createProduct(createProductDto);
    }

    @Put(':id')
    updateProduct(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto): string {
        return this.productsService.updateProduct(id, updateProductDto);
    }

    @Patch(':id')
    partiallyUpdateProduct(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto): string {
        return this.productsService.partiallyUpdateProduct(id, updateProductDto);
    }

    @Delete(':id')
    deleteProduct(@Param('id') id: string): string {
        return this.productsService.deleteProduct(id);
    }
}