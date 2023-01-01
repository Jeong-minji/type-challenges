/* Type-Challenges: No.7 */

interface Test {
  count: number;
}

type ReadonlyTest = Readonly<Test>;

const test: ReadonlyTest = {
  count: 5,
};

test.count = 3;

/* Readonly 구현하기 */
type MyReadonly<T> = {
  readonly [key in keyof T]: T[key];
};

/* Test */
interface Todo {
  title: string;
  description: string;
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar",
};

todo.title = "Hello"; // Error: cannot reassign a readonly property
todo.description = "barFoo"; // Error: cannot reassign a readonly property

/*
    keyof T = "title" | "description";
    key in keyof T:  keyOfT중 하나의 값이 interface의 key값으로 들어올 수 있다라는 의미
*/
