import { ApiProperty } from '@nestjs/swagger';

export class CreateFlightRouteDto {
  @ApiProperty({ example: 'Chisinau' })
  origin: string;

  @ApiProperty({ example: 'Bucharest' })
  destination: string;

  @ApiProperty({ example: 1, description: 'FK -> Airline.id' })
  airlineId: number;
}
