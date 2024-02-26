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
  updateTodo(id: string, title: string) {
    try {
      return fetch("https://jsonplaceholder.typicode.com/posts/${:id}", {
        method: "PATCH",
        body: JSON.stringify({
          title: "foo",
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    } catch (e) {
      throw new Error("データの取得に失敗しました: ");
    }
  }
}
