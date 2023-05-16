import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

@Schema({ timestamps: true })
export class Location extends Document {
  @Prop({ required: true })
  chassis: string;

  @Prop({ required: true })
  latitude: number;

  @Prop({ required: true })
  longitude: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Truck' })
  truckId: string;
}

export const LocationSchema = SchemaFactory.createForClass(Location);
