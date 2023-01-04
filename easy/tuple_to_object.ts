/* Type-Challenges: No.11 */

/* Tuple To Object 구현하기 */
type TupleToObject<T extends readonly (string | number)[]> = {
  [key in T[number]]: key;
};

/* Test */
const tuple = ["tesla", "model3", 5] as const;
const tuple2 = [1, 2, 3] as const;

// 정상
const example: TupleToObject<typeof tuple> = {
  tesla: "tesla",
  model3: "model3",
  5: 5,
};

// tuple에 있는 값 중 하나라도 누락된 값이 있을 때 에러 발생
const example2: TupleToObject<typeof tuple> = {
  tesla: "tesla",
  model3: "model3",
};

// key값과 다른 값을 value로 할당했을 때 에러 발생
const example3: TupleToObject<typeof tuple> = {
  tesla: "noTesla",
  model3: "model3",
  5: 5,
};
