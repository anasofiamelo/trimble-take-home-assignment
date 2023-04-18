import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateLocationDto {
  @IsNotEmpty()
  @IsString()
  @Length(17)
  chassi: string;

  @IsNotEmpty()
  latitude: number;

  @IsNotEmpty()
  longitude: number;
}
