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

  deleteTodo(id: number) {
    try {
      if (id < 1 || id > 200) {
        throw new NotFoundException("指定されたIDのデータは存在しません。");
      }
      return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: "DELETE",
      }).then((response) => response.json());
    } catch (e) {
      throw new Error("データの削除に失敗しました: ");
    }
  }
}
