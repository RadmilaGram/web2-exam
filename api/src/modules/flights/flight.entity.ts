import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { FlightRoute } from '../flight-routes/flight-route.entity';

@Entity('flights')
export class Flight {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  flightNumber: string;

  @Column()
  departureTime: string; // для новичка проще строкой "2025-12-27 14:30"

  // FK
  @Column()
  routeId: number;

  // many flights -> 1 route
  @ManyToOne(() => FlightRoute, (route) => route.flights, {
    onDelete: 'CASCADE',
  })
  route: FlightRoute;
}
