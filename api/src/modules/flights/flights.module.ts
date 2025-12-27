import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flight } from './flight.entity';
import { FlightRoute } from '../flight-routes/flight-route.entity';
import { FlightsController } from './flights.controller';
import { FlightsService } from './flights.service';

@Module({
  imports: [TypeOrmModule.forFeature([Flight, FlightRoute])],
  controllers: [FlightsController],
  providers: [FlightsService],
})
export class FlightsModule {}
