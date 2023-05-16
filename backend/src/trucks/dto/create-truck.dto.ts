import { IsNotEmpty, IsString, Length } from 'class-validator';
export class CreateTruckDto {
  @IsNotEmpty()
  @IsString()
  @Length(17)
  chassis: string;

  @IsNotEmpty()
  @IsString()
  model: string;

  @IsNotEmpty()
  year: number;
}
