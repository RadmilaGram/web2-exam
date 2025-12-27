import { ApiProperty } from '@nestjs/swagger';

export class UpdateCategoryDto {
  @ApiProperty({
    example: 'Laptops',
    description: 'Category name',
    required: false,
  })
  name?: string;

  @ApiProperty({
    example: 'Devices for mobile computing',
    required: false,
  })
  description?: string;
}
