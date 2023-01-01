/* Type-Challenges: No.4 */

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

/* Pick 구현하기 */
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

/* Test */
const title: MyPick<Todo, "title"> = {
  title: "title",
};

const titleAndCompleted: MyPick<Todo, "title" | "completed"> = {
  title: "title",
  completed: true,
};
