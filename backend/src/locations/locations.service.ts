import { NotFoundException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateLocationDto } from './dto/create-location.dto';

import { Location } from './schemas/location.schema';

import { Truck } from '../trucks/schemas/truck.schema';

@Injectable()
export class LocationsService {
  constructor(
    @InjectModel(Location.name) private locationModel: Model<Location>,
    @InjectModel(Truck.name) private truckModel: Model<Truck>,
  ) {}

  async create(truckId, createLocationDto: CreateLocationDto) {
    const truck = await this.truckModel.findById(truckId);

    if (!truck) throw new NotFoundException('Truck not found');

    await this.locationModel.create({ ...createLocationDto, truckId });
  }

  async findLocationsByTruckId(truckId: string) {
    const locations = await this.locationModel.find({ truckId });

    return locations;
  }

  async findLocationLastAdded(truckId: string) {
    const location = await this.locationModel
      .find({ truckId })
      .sort({ createdAt: -1 })
      .limit(1);

    return location;
  }

  remove(id: number) {
    return `This action removes a #${id} location`;
  }
}
