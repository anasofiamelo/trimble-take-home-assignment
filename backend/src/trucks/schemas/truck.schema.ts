import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TruckDocument = HydratedDocument<Truck>;

@Schema()
export class Truck {
  @Prop({ unique: true })
  chassis: string;

  @Prop({})
  model: string;

  @Prop({})
  year: number;
}

export const TruckSchema = SchemaFactory.createForClass(Truck);
