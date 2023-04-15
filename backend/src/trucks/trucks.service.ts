import { Injectable } from '@nestjs/common';
import { CreateTruckDto } from './dto/create-truck.dto';

@Injectable()
export class TrucksService {
  create(createTruckDto: CreateTruckDto) {
    console.log('createTruckDto :>> ', createTruckDto);
    return 'This action adds a new truck';
  }

  findAll() {
    return `This action returns all trucks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} truck`;
  }

  remove(id: number) {
    return `This action removes a #${id} truck`;
  }
}
