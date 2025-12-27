// entity: commit

// export interface Employee {
//   id: number;
//   idnp: string;
//   name: string;
//   salary: number;
// }

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('employees') // имя таблицы в БД
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 13 })
  idnp: string;

  @Column()
  name: string; // здесь будем хранить "Имя Фамилия" одной строкой

  @Column('int')
  salary: number;
}
