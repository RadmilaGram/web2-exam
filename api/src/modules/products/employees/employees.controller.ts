import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
  InternalServerErrorException,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
// форматы данных, которые приходят в запросах.
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {} //указываем тип

  // маршрут GET /employees список всех сотрудников
  @Get()
  getAll() {
    return this.employeesService.findAll();
  }

  // GET /employees/:id один сотрудник
  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.employeesService.findOne(id);
  }

  // POST /employees  добавить нового
  // тело: { "idnp": "...", "name": "...", "salary": 1000 }
  // возвращает "Success" или "Error"
  @Post()
  // dto описывает поля
  create(@Body() dto: CreateEmployeeDto) {
    try {
      this.employeesService.create(dto);
      return 'Success';
    } catch (e) {
      throw new InternalServerErrorException('Error');
    }
  }

  // PUT /employees/:id изменить существующего
  // тело: { "name": "New Name", "salary": 2000, ... }
  // возвращает "Success" или "Error"
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateEmployeeDto,
  ) {
    try {
      this.employeesService.update(id, dto);
      return 'Success';
    } catch (e) {
      // если не найден - придёт 404 из сервиса,
      // если что-то пошло не так - 500
      if (e.status === 404) {
        throw e;
      }
      throw new InternalServerErrorException('Error');
    }
  }

  // DELETE /employees/:id удалить
  // успешный ответ: {}   иначе "Error"
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    try {
      this.employeesService.remove(id);
      return {}; // как в задании
    } catch (e) {
      if (e.status === 404) {
        throw e;
      }
      throw new InternalServerErrorException('Error');
    }
  }
}
