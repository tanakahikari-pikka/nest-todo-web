import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
  fetchTodos() {
    // https://jsonplaceholder.typicode.com/todos からデータを取得して返す
    return fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => {
        return json;
      });
  }
}
