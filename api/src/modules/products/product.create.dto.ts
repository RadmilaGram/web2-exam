import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
    @ApiProperty({ example: 'Sample Product', description: 'The name of the product' })
    name: string;

    @ApiProperty({ example: 100, description: 'The price of the product' })
    price: number;
}