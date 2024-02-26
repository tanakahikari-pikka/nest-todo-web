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
      return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: "DELETE",
      }).then((response) =>{
        if (!response.ok) {
          if (response.status === 404) {
          throw new NotFoundException("指定されたIDのデータが見つかりませんでした");
          } else {
            throw new Error("データの削除に失敗しました:  " + response.status + " " + response.statusText);
          }
        }
         response.json()}).catch((_) => {
        throw new Error("データの削除に失敗しました: ");
      });
  }
}