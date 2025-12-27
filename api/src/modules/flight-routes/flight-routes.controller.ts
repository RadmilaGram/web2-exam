import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FlightRoutesService } from './flight-routes.service';
import { CreateFlightRouteDto } from './dto/create-flight-route.dto';
import { UpdateFlightRouteDto } from './dto/update-flight-route.dto';

@ApiTags('FlightRoutes (lvl2)')
@Controller('routes')
export class FlightRoutesController {
  constructor(private readonly service: FlightRoutesService) {}

  @Post()
  create(@Body() dto: CreateFlightRouteDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateFlightRouteDto,
  ) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }

  // 4b: /routes/:id/flights
  @Get(':id/flights')
  getFlights(@Param('id', ParseIntPipe) id: number) {
    return this.service.getFlights(id);
  }
}
