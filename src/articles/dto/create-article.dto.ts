import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateArticleDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  title: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @MaxLength(300)
  description?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  body: string;

  @ApiProperty({ required: false, default: false })
  @IsBoolean()
  @IsOptional()
  published?: boolean = false;
}
