import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Airline } from '../airlines/airline.entity';
import { Flight } from '../flights/flight.entity';

@Entity('flight_routes')
export class FlightRoute {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  origin: string;

  @Column()
  destination: string;

  // FK
  @Column()
  airlineId: number;

  // many routes -> 1 airline
  @ManyToOne(() => Airline, (airline) => airline.routes, {
    onDelete: 'CASCADE',
  })
  airline: Airline;

  // 1 route -> many flights
  @OneToMany(() => Flight, (flight) => flight.route)
  flights: Flight[];
}
