import { ApiProperty } from "@nestjs/swagger";

export class UpdateProductDto {
    @ApiProperty({ example: 'Updated Product', description: 'The name of the product' })
    name?: string;

    @ApiProperty({ example: 250, description: 'The price of the product' })
    price?: number;
}