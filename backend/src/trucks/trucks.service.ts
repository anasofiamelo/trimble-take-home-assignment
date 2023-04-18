import {
  NotFoundException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateTruckDto } from './dto/create-truck.dto';

import { Truck } from './schemas/truck.schema';

@Injectable()
export class TrucksService {
  constructor(@InjectModel(Truck.name) private truckModel: Model<Truck>) {}

  async create(createTruckDto: CreateTruckDto) {
    const { chassi } = createTruckDto;
    const exists = await this.truckModel.findOne({ chassi });

    if (exists) {
      throw new ConflictException('Truck already exists');
    }

    await this.truckModel.create(createTruckDto);
  }

  async findAll() {
    const trucks = await this.truckModel.find();
    return trucks;
  }

  async findOne(id: string) {
    let truck;
    try {
      truck = await this.truckModel.findById(id);
    } catch (error) {
      if (!truck) {
        throw new NotFoundException('Truck not found');
      }
    }
    return truck;
  }

  async remove(id: string) {
    await this.truckModel.findByIdAndDelete(id);
  }
}
