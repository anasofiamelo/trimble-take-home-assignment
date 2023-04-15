import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateTruckDto } from './dto/create-truck.dto';

import { Truck } from './entities/truck.entity';

import { Trucks } from './schemas/truck.schema';
@Injectable()
export class TrucksService {
  constructor(@InjectModel(Trucks.name) private truckModel: Model<Truck>) {}

  create(createTruckDto: CreateTruckDto) {
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
