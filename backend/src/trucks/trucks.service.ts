import { NotFoundException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateTruckDto } from './dto/create-truck.dto';

import { Truck } from './entities/truck.entity';

import { Trucks } from './schemas/truck.schema';
@Injectable()
export class TrucksService {
  constructor(@InjectModel(Trucks.name) private truckModel: Model<Truck>) {}

  async create(createTruckDto: CreateTruckDto) {
    await this.truckModel.create(createTruckDto);
  }

  async findAll(): Promise<Truck[]> {
    const trucks = await this.truckModel.find();
    return trucks;
  }

  async findOne(chassi: string) {
    const truck = await this.truckModel.findOne({ chassi });

    if (!truck) {
      throw new NotFoundException('Truck not found');
    }

    return truck;
  }

  remove(id: number) {
    return `This action removes a #${id} truck`;
  }
}
