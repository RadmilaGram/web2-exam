import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Airline } from './airline.entity';
import { CreateAirlineDto } from './dto/create-airline.dto';
import { UpdateAirlineDto } from './dto/update-airline.dto';
import { FlightRoute } from '../flight-routes/flight-route.entity';
import { Flight } from '../flights/flight.entity';

@Injectable()
export class AirlinesService {
  constructor(
    @InjectRepository(Airline)
    private readonly airlineRepo: Repository<Airline>,
    @InjectRepository(FlightRoute)
    private readonly routeRepo: Repository<FlightRoute>,
    @InjectRepository(Flight) private readonly flightRepo: Repository<Flight>,
  ) {}

  findAll() {
    return this.airlineRepo.find();
  }

  async findOne(id: number) {
    try {
      return await this.airlineRepo.findOneByOrFail({ id });
    } catch {
      throw new HttpException('Airline not found', 404);
    }
  }

  create(dto: CreateAirlineDto) {
    return this.airlineRepo.save(dto);
  }

  async update(id: number, dto: UpdateAirlineDto) {
    await this.findOne(id);
    return this.airlineRepo.save({ id, ...dto });
  }

  async remove(id: number) {
    const airline = await this.findOne(id);
    return this.airlineRepo.remove(airline);
  }

  // 4b: GET /airlines/:id/routes
  async getRoutes(airlineId: number) {
    await this.findOne(airlineId);
    return this.routeRepo.find({ where: { airlineId } });
  }

  // 4b join: GET /airlines/:id/flights
  async getFlights(airlineId: number) {
    await this.findOne(airlineId);

    // join flights -> route -> airline
    return this.flightRepo
      .createQueryBuilder('f')
      .innerJoin('f.route', 'r')
      .where('r.airlineId = :airlineId', { airlineId })
      .getMany();
  }
}
