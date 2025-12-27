import { ApiProperty } from '@nestjs/swagger';

export class UpdateAirlineDto {
  @ApiProperty({ required: false, example: 'New Airline Name' })
  name?: string;

  @ApiProperty({ required: false, example: 'Romania' })
  country?: string;
}
