import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

import { Locations } from '../../locations/schemas/location.schema';

export type TruckDocument = mongoose.HydratedDocument<Trucks>;

@Schema({ timestamps: true })
export class Trucks {
  @Prop({ unique: true })
  chassi: string;

  @Prop({})
  model: string;

  @Prop({})
  year: number;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Locations' }] })
  locations: Locations[];
}

export const TrucksSchema = SchemaFactory.createForClass(Trucks);
