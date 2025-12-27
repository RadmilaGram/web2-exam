import { ApiProperty } from '@nestjs/swagger';

export class UpdateReviewDto {
  @ApiProperty({
    example: 1,
    description: 'ID of the product',
    required: false,
  })
  productId?: number;

  @ApiProperty({
    example: 'John Doe',
    required: false,
  })
  author?: string;

  @ApiProperty({
    example: 4,
    description: 'Rating from 1 to 5',
    required: false,
  })
  rating?: number;

  @ApiProperty({
    example: 'Good product',
    required: false,
  })
  comment?: string;
}
