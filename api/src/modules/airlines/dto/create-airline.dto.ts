import { ApiProperty } from '@nestjs/swagger';

export class CreateAirlineDto {
  @ApiProperty({ example: 'SkyWings' })
  name: string;

  @ApiProperty({ example: 'Moldova' })
  country: string;
}
