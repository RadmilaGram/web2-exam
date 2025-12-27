import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Airline } from './airline.entity';
import { FlightRoute } from '../flight-routes/flight-route.entity';
import { Flight } from '../flights/flight.entity';
import { AirlinesController } from './airlines.controller';
import { AirlinesService } from './airlines.service';

@Module({
  imports: [TypeOrmModule.forFeature([Airline, FlightRoute, Flight])],
  controllers: [AirlinesController],
  providers: [AirlinesService],
})
export class AirlinesModule {}
