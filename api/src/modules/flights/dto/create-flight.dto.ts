import { ApiProperty } from '@nestjs/swagger';

export class CreateFlightDto {
  @ApiProperty({ example: 'SW-101' })
  flightNumber: string;

  @ApiProperty({ example: '2025-12-27 14:30' })
  departureTime: string;

  @ApiProperty({ example: 1, description: 'FK -> FlightRoute.id' })
  routeId: number;
}
