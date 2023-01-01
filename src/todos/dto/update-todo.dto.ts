import { IsString } from 'class-validator';

export class UpdateTodoDto {
  @IsString()
  readonly name?: string;
}
