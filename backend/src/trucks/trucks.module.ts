import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TrucksService } from './trucks.service';
import { TrucksController } from './trucks.controller';

import { TrucksSchema } from './schemas/truck.schema';
import { Trucks } from './schemas/truck.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Trucks.name, schema: TrucksSchema }]),
  ],
  controllers: [TrucksController],
  providers: [TrucksService],
})
export class TrucksModule {}
