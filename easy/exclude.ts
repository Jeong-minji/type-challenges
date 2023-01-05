/* Type-Challenges: No.43 */
type MyExclude<T, U> = T extends U ? never : T; // 값이 U이면 never 타입을 반환하고, 그 외에는 T 타입을 반환

const test: MyExclude<"a" | "b" | "c", "a"> = "b";
const test2: MyExclude<1 | 2 | 3, 3> = 3; // error
