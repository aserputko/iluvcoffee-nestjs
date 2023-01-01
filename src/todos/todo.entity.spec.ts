import { Todo } from 'src/todos/todo.entity';

describe('TodoEntity', () => {
  it('should be defined', () => {
    expect(new Todo()).toBeDefined();
  });
});
