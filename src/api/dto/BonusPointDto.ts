import { IsNotEmpty, IsOptional } from 'class-validator';

export class AddBonusPointDto {
  @IsNotEmpty()
  number: number;
  @IsNotEmpty()
  bonusPoint: number;
  @IsOptional()
  bonusType: string;
  @IsOptional()
  expiryDate: Date;
}
