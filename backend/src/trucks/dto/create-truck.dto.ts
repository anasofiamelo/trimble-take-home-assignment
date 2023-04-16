import { IsNotEmpty, IsString, Length } from 'class-validator';
export class CreateTruckDto {
  @IsNotEmpty()
  @IsString()
  @Length(17)
  chassi: string;

  @IsNotEmpty()
  @IsString()
  model: string;

  @IsNotEmpty()
  year: number;
}
