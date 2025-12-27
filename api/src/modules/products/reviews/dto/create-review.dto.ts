import { ApiProperty } from '@nestjs/swagger';

export class CreateReviewDto {
  @ApiProperty({ example: 1, description: 'ID of the product' })
  productId: number;

  @ApiProperty({ example: 'John Doe' })
  author: string;

  @ApiProperty({ example: 5, description: 'Rating from 1 to 5' })
  rating: number;

  @ApiProperty({ example: 'Very good product!', required: false })
  comment?: string;
}
