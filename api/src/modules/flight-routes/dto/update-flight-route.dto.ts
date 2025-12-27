import { ApiProperty } from '@nestjs/swagger';

export class UpdateFlightRouteDto {
  @ApiProperty({ required: false, example: 'Iasi' })
  origin?: string;

  @ApiProperty({ required: false, example: 'Berlin' })
  destination?: string;

  @ApiProperty({ required: false, example: 2, description: 'FK -> Airline.id' })
  airlineId?: number;
}
