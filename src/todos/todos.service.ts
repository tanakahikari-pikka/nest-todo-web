import { Injectable } from "@nestjs/common";

@Injectable()
export class TodosService {
  fetchTodos() {
    try {
      // https://jsonplaceholder.typicode.com/todos からデータを取得して返す
      return fetch("https://jsonplaceholder.typicode.com/todos").then(
        (response) => response.json(),
      );
    } catch (e) {
      throw new Error("データの取得に失敗しました: ");
    }
  }
  // TODO: idをどう渡そう
  findOne(id: number) {
    try {
      // https://jsonplaceholder.typicode.com/todos/:id からデータを取得して返す
      return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
        (response) => response.json(),
      );
    } catch (e) {
      throw new Error("データの取得に失敗しました: ");
    }
  }
}
