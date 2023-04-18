import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Locations, LocationSchema } from './schemas/location.schema';
import { Trucks, TrucksSchema } from '../trucks/schemas/truck.schema';

import { LocationsService } from './locations.service';
import { LocationsController } from './locations.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Locations.name, schema: LocationSchema },
      { name: Trucks.name, schema: TrucksSchema },
    ]),
  ],
  controllers: [LocationsController],
  providers: [LocationsService],
})
export class LocationsModule {}
