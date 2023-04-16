import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TruckDocument = HydratedDocument<Trucks>;

@Schema({ timestamps: true })
export class Trucks {
  @Prop({ unique: true })
  chassi: string;

  @Prop({})
  model: string;

  @Prop({})
  year: number;
}

export const TrucksSchema = SchemaFactory.createForClass(Trucks);
