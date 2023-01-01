import { IsBoolean, IsString } from 'class-validator';

export class UpdateTodoDto {
  @IsString()
  readonly name?: string;

  @IsBoolean()
  readonly toggle?: boolean;
}
