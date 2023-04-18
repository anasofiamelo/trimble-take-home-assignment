import { NotFoundException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateLocationDto } from './dto/create-location.dto';

import { Locations } from './schemas/location.schema';

import { Truck } from '../trucks/entities/truck.entity';
import { Trucks } from '../trucks/schemas/truck.schema';

@Injectable()
export class LocationsService {
  constructor(
    @InjectModel(Locations.name) private locationModel: Model<Locations>,
    @InjectModel(Trucks.name) private truckModel: Model<Truck>,
  ) {}

  async create(createLocationDto: CreateLocationDto) {
    const { chassi } = createLocationDto;

    const truck = await this.truckModel.findOne({ chassi });

    if (!truck) throw new NotFoundException('Truck not found');

    await this.locationModel.create(createLocationDto);
  }

  remove(id: number) {
    return `This action removes a #${id} location`;
  }
}
