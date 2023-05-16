import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TrucksService } from './trucks.service';
import { TrucksController } from './trucks.controller';

import { Truck, TruckSchema } from './schemas/truck.schema';
import { Location, LocationSchema } from '../locations/schemas/location.schema';
import { LocationsService } from 'src/locations/locations.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Truck.name, schema: TruckSchema },
      { name: Location.name, schema: LocationSchema },
    ]),
  ],
  controllers: [TrucksController],
  providers: [TrucksService, LocationsService],
})
export class TrucksModule {}
