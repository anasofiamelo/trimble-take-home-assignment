import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TrucksService } from './trucks.service';
import { LocationsService } from 'src/locations/locations.service';
import { CreateTruckDto } from './dto/create-truck.dto';

@Controller('trucks')
export class TrucksController {
  constructor(
    private readonly trucksService: TrucksService,
    private readonly locationsService: LocationsService,
  ) {}

  @Post()
  create(@Body() createTruckDto: CreateTruckDto) {
    return this.trucksService.create(createTruckDto);
  }

  @Get()
  findAll() {
    return this.trucksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const truck = await this.trucksService.findOne(id);
    const lastLocation = await this.locationsService.findLocationLastAdded(id);
    return { truck, lastLocation };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trucksService.remove(+id);
  }
}
