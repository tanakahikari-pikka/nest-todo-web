import { Injectable, NotFoundException } from "@nestjs/common";

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
  findOne(id: string) {
    try {
      return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
        (response) => {
          if (response.status === 404) {
            throw new NotFoundException("データが見つかりませんでした");
          }
          return response.json();
        },
      );
    } catch (e) {
      throw new Error("データの取得に失敗しました: ");
    }
  }
}
