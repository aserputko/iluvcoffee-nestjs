import { IsInt, IsOptional, Min } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @IsInt()
  @Min(0)
  limit: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  offset: number;
}
