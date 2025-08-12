import { IsNumber, IsOptional } from 'class-validator';

export class SearchCustomerDto {
    @IsOptional()
    @IsNumber()
    number?: number;

    // @IsOptional()
    // @IsNumber()
    // cardNumber?: number;
}
