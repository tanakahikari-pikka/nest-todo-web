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

  createTodo(params:  { title: string; body: string; userId: Int16Array; }) {
      // https://jsonplaceholder.typicode.com/todos にデータを送信して返す
      return fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          // TODO: paramsの値を送信したい
          title: "doo",
          // params.title,
          body: "ddd",
          // params.body,
          userId: 1,
          // params.userId,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((response) => response.json()).catch((_) => {
        throw new Error("データの送信に失敗しました: ");
      }
    );
  }
}
