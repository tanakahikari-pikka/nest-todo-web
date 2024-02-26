import { Injectable, NotFoundException } from "@nestjs/common";
import { log } from "console";
import { Logger } from "winston";

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
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(response => {
      if (!response.ok) {
        if (response.status === 404) {
          throw new NotFoundException("データが見つかりませんでした");
        } else {
          throw new Error("データの取得に失敗しました: " + response.status);
        }
      }
      return response.json();
    })
    .catch(error => {
      throw error;
    });
  }
}
