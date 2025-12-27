import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { FlightRoute } from '../flight-routes/flight-route.entity';

@Entity('airlines')
export class Airline {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  country: string;

  // 1 airline -> many routes
  @OneToMany(() => FlightRoute, (route) => route.airline)
  routes: FlightRoute[];
}
