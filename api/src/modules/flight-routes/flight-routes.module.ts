import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlightRoute } from './flight-route.entity';
import { Airline } from '../airlines/airline.entity';
import { Flight } from '../flights/flight.entity';
import { FlightRoutesController } from './flight-routes.controller';
import { FlightRoutesService } from './flight-routes.service';

@Module({
  imports: [TypeOrmModule.forFeature([FlightRoute, Airline, Flight])],
  controllers: [FlightRoutesController],
  providers: [FlightRoutesService],
})
export class FlightRoutesModule {}
