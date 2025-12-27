import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Employee } from './employee.entity';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  // === методы, которые вызываются из контроллера ===

  // GET /employees
  async findAll(): Promise<Employee[]> {
    return await this.employeeRepository.find();
  }

  // GET /employees/:id
  async findOne(id: number): Promise<Employee> {
    try {
      return await this.employeeRepository.findOneByOrFail({ id });
    } catch (error) {
      throw new HttpException('Employee not found', 404);
    }
  }

  // POST /employees
  async create(dto: CreateEmployeeDto): Promise<Employee> {
    const employee = this.employeeRepository.create({
      idnp: dto.idnp,
      name: `${dto.name} ${dto.surname}`,
      salary: dto.salary,
    });

    return await this.employeeRepository.save(employee);
  }

  // PUT /employees/:id
  async update(id: number, dto: UpdateEmployeeDto): Promise<Employee> {
    const existing = await this.findOne(id);

    const [oldName, oldSurname] = existing.name.split(' ');
    const newName = dto.name ?? oldName;
    const newSurname = dto.surname ?? oldSurname;

    if (dto.idnp !== undefined) {
      existing.idnp = dto.idnp;
    }

    if (dto.salary !== undefined) {
      existing.salary = dto.salary;
    }

    existing.name = `${newName} ${newSurname}`;

    return await this.employeeRepository.save(existing);
  }

  // DELETE /employees/:id
  async remove(id: number): Promise<Employee> {
    const existing = await this.findOne(id);
    return await this.employeeRepository.remove(existing);
  }
}
