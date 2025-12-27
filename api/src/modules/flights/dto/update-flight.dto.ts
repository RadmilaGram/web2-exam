import { ApiProperty } from '@nestjs/swagger';

export class UpdateFlightDto {
  @ApiProperty({ required: false, example: 'SW-102' })
  flightNumber?: string;

  @ApiProperty({ required: false, example: '2025-12-28 08:00' })
  departureTime?: string;

  @ApiProperty({
    required: false,
    example: 2,
    description: 'FK -> FlightRoute.id',
  })
  routeId?: number;
}
