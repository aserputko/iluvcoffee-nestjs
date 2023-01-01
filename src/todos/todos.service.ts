import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationQueryDto } from 'src/shared/dto/pagination-query.dto';
import { CreateTodoDto } from 'src/todos/dto/create-todo.dto';
import { UpdateTodoDto } from 'src/todos/dto/update-todo.dto';
import { Todo } from 'src/todos/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  findAll(paginationQuery: PaginationQueryDto) {
    const { limit, offset } = paginationQuery;
    return this.todoRepository.find({ skip: offset, take: limit });
  }

  async findOne(id: string) {
    const todo = await this.todoRepository.findOne({ where: { id: +id } });
    if (!todo) {
      throw new NotFoundException(`Todo #${id} not found`);
    }
    return todo;
  }

  async create(createTodoDto: CreateTodoDto) {
    const todo = this.todoRepository.create(createTodoDto);
    return this.todoRepository.save(todo);
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    const todo = await this.todoRepository.preload({
      id: +id,
      ...updateTodoDto,
    });
    if (!todo) {
      throw new NotFoundException(`Todo #${id} not found`);
    }
    return this.todoRepository.save(todo);
  }

  async remove(id: string) {
    const todo = await this.findOne(id);
    return this.todoRepository.remove(todo);
  }
}
