/* Type-Challenges: No.14 */

/* First of Array 구현하기 */
type First<T extends any[]> = T extends [] ? never : T[0];

/* Test */
const test: First<[3, "2", 1]> = "hello"; // Error
const test2: First<[3, "2", 1]> = 3;
