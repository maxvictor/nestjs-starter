import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSampleDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;
}
