import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { FlightRoute } from './flight-route.entity';
import { CreateFlightRouteDto } from './dto/create-flight-route.dto';
import { UpdateFlightRouteDto } from './dto/update-flight-route.dto';
import { Airline } from '../airlines/airline.entity';
import { Flight } from '../flights/flight.entity';

@Injectable()
export class FlightRoutesService {
  constructor(
    @InjectRepository(FlightRoute)
    private readonly routeRepo: Repository<FlightRoute>,
    @InjectRepository(Airline)
    private readonly airlineRepo: Repository<Airline>,
    @InjectRepository(Flight) private readonly flightRepo: Repository<Flight>,
  ) {}

  findAll() {
    return this.routeRepo.find();
  }

  async findOne(id: number) {
    try {
      return await this.routeRepo.findOneByOrFail({ id });
    } catch {
      throw new HttpException('Route not found', 404);
    }
  }

  async create(dto: CreateFlightRouteDto) {
    // FK check
    const airline = await this.airlineRepo.findOneBy({ id: dto.airlineId });
    if (!airline) throw new HttpException('Airline (airlineId) not found', 404);

    return this.routeRepo.save(dto);
  }

  async update(id: number, dto: UpdateFlightRouteDto) {
    await this.findOne(id);

    if (dto.airlineId !== undefined) {
      const airline = await this.airlineRepo.findOneBy({ id: dto.airlineId });
      if (!airline)
        throw new HttpException('Airline (airlineId) not found', 404);
    }

    return this.routeRepo.save({ id, ...dto });
  }

  async remove(id: number) {
    const route = await this.findOne(id);
    return this.routeRepo.remove(route);
  }

  // 4b: GET /routes/:id/flights
  async getFlights(routeId: number) {
    await this.findOne(routeId);
    return this.flightRepo.find({ where: { routeId } });
  }
}
