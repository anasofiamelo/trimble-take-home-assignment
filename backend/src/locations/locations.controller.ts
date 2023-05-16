import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { CreateLocationDto } from './dto/create-location.dto';

@Controller('trucks/:id/locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Post()
  async create(
    @Param('id') truckId: string,
    @Body() createLocationDto: CreateLocationDto,
  ) {
    return this.locationsService.create(truckId, createLocationDto);
  }

  @Get()
  findLocationsByTruckId(@Param('id') id: string) {
    return this.locationsService.findLocationsByTruckId(id);
  }

  @Get('last')
  findLocationLastAdded(@Param('id') id: string) {
    return this.locationsService.findLocationLastAdded(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.locationsService.remove(+id);
  }
}
