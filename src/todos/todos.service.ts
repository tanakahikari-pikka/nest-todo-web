import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
  fetchTodos() {
    try {
      // https://jsonplaceholder.typicode.com/todos からデータを取得して返す
      return fetch('https://jsonplaceholder.typicode.com/todos').then(
        (response) => response.json(),
      );
    } catch (e) {
      throw new Error(e.message);
    }
  }
}