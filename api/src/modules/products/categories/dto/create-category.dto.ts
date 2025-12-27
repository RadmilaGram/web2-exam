import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({ example: 'Laptops', description: 'Category name' })
  name: string;

  @ApiProperty({ example: 'Devices for mobile computing', required: false })
  description?: string;
}
