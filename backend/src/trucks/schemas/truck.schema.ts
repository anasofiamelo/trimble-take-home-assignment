import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

import { Location } from 'src/locations/schemas/location.schema';
@Schema({ timestamps: true })
export class Truck extends Document {
  @Prop({ unique: true })
  chassi: string;

  @Prop({ required: true })
  model: string;

  @Prop({ required: true })
  year: number;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Location' }] })
  locations: Location[];
}

export const TruckSchema = SchemaFactory.createForClass(Truck);
