import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TrucksModule } from './trucks/trucks.module';
import { LocationsModule } from './locations/locations.module';

const MONGO_DB_URI =
  'mongodb+srv://sofiamelod:cEGmSLRoGQwYSFpv@cluster0.4xqpzu2.mongodb.net/?retryWrites=true&w=majority';

@Module({
  imports: [
    MongooseModule.forRoot(MONGO_DB_URI),
    TrucksModule,
    LocationsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
