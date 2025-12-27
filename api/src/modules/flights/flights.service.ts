import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Flight } from './flight.entity';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { FlightRoute } from '../flight-routes/flight-route.entity';

@Injectable()
export class FlightsService {
  constructor(
    @InjectRepository(Flight) private readonly flightRepo: Repository<Flight>,
    @InjectRepository(FlightRoute)
    private readonly routeRepo: Repository<FlightRoute>,
  ) {}

  findAll() {
    return this.flightRepo.find();
  }

  async findOne(id: number) {
    try {
      return await this.flightRepo.findOneByOrFail({ id });
    } catch {
      throw new HttpException('Flight not found', 404);
    }
  }

  async create(dto: CreateFlightDto) {
    const route = await this.routeRepo.findOneBy({ id: dto.routeId });
    if (!route) throw new HttpException('Route (routeId) not found', 404);

    return this.flightRepo.save(dto);
  }

  async update(id: number, dto: UpdateFlightDto) {
    await this.findOne(id);

    if (dto.routeId !== undefined) {
      const route = await this.routeRepo.findOneBy({ id: dto.routeId });
      if (!route) throw new HttpException('Route (routeId) not found', 404);
    }

    return this.flightRepo.save({ id, ...dto });
  }

  async remove(id: number) {
    const flight = await this.findOne(id);
    return this.flightRepo.remove(flight);
  }
}
