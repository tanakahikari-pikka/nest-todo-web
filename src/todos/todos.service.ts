import { Injectable } from "@nestjs/common";

@Injectable()
export class TodosService {
  fetchTodos() {
    // https://jsonplaceholder.typicode.com/todos からデータを取得して返す
    return fetch("https://jsonplaceholder.typicode.com/todos").then(
      (response) => response.json()
    );
  }
  catch() {
    throw new Error("データの取得に失敗しました");
  }
}
