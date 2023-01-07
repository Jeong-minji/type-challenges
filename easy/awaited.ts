/* Type-Challenges: No.189 */

// Promise<T>
// 제네렉 타입의 promise는 성공시 리턴하는 값의 타입과 일치해야 한다.
const test2 = (arg: string): Promise<number> => {
  return new Promise<number>((res, rej) => {
    if (arg === "a") {
      res(1);
      // res("1");  // error, response type should be number
    } else {
      rej("1");
    }
  });
};

// infer
// infer은 extends 구문에서 해당 위치에 들어갈 수 있는 최대한의 타입을 유추하고,
// 그 타입을 extends 문이 참일 때 반환한다.
type MyType<T> = T extends infer R ? R : null;

const a: MyType<number> = 123;

/* Awaited 구현하기 */
type MyAwaited<T> = T extends PromiseLike<infer R> ? MyAwaited<R> : T;

/* Test */
type X = Promise<string>;
type Y = Promise<{ field: number }>;
type Z = Promise<Promise<string | number>>;
type Z1 = Promise<Promise<Promise<string | boolean>>>;
type T = { then: (onfulfilled: (arg: number) => any) => any };

const example: MyAwaited<X> = 123; // error, value should be string type

const example2: MyAwaited<Y> = {
  field: 5,
};

const example3 = (): MyAwaited<Z> => {
  return 123;
};

const example4 = (): MyAwaited<Z1> => {
  return 123; // error, response type should be string | boolean type
};

const example5 = (): MyAwaited<T> => {
  return;
};
