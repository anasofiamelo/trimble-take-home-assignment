import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TrucksService } from './trucks.service';
import { CreateTruckDto } from './dto/create-truck.dto';

@Controller('trucks')
export class TrucksController {
  constructor(private readonly trucksService: TrucksService) {}

  @Post()
  create(@Body() createTruckDto: CreateTruckDto) {
    return this.trucksService.create(createTruckDto);
  }

  @Get()
  findAll() {
    return this.trucksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trucksService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trucksService.remove(+id);
  }
}
