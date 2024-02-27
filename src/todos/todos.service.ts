import { Injectable, NotFoundException } from "@nestjs/common";
import { Todo } from "./todo";

@Injectable()
export class TodosService {
  async fetchTodos() {
    //jsonplaceholder.typicode.com/todos からデータを取得して返す
    return fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .catch((error) => {
        throw new Error(`データの取得に失敗しました: ${error}`);
      });
  }
  async findOne(id: string) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => {
        if (response.status === 404) {
          throw new NotFoundException("データが見つかりませんでした");
        }
        if (!response.ok) {
          throw new Error(`データの取得に失敗しました:  ${response.status}`);
        }
        response.json();
      })
      .catch((error) => {
        throw error;
      });
  }
  async createOne(body: Todo) {
    return fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify({
        userId: body.userId,
        title: body.title,
        completed: body.completed,
      }),
      headers: {
        "Content-type": "application/json;",
      },
    })
      .then((response) => {
        if (response.status === 404) {
          throw new NotFoundException("データが見つかりませんでした");
        }
        if (!response.ok) {
          throw new Error(`データの取得に失敗しました:  ${response.status}`);
        }
        response.json();
      })
      .catch((error) => {
        throw error;
      });
  }
  async updateOne(id: string, body: Todo) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: body.title,
        completed: body.completed,
      }),
      headers: {
        "Content-type": "application/json;",
      },
    })
      .then((response) => {
        if (response.status === 404) {
          throw new NotFoundException("データが見つかりませんでした");
        }
        if (!response.ok) {
          throw new Error(`データの取得に失敗しました:  ${response.status}`);
        }
        response.json();
      })
      .catch((error) => {
        throw error;
      });
  }
  async deleteOne(id: string) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`データの取得に失敗しました:  ${response.status}`);
        }
        response.json();
      })
      .catch((error) => {
        throw error;
      });
  }
}
