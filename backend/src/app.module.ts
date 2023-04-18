import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { TrucksModule } from './trucks/trucks.module';
import { LocationsModule } from './locations/locations.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_DB_URI),
    TrucksModule,
    LocationsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
