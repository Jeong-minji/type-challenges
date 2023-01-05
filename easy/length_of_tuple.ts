/* Type-Challenges: No.18 */

/* Length of Tuple 구현하기 */
type Length<T extends readonly any[]> = T["length"];

/* Test */
const test: Length<["a", "b", "c"]> = 3;
const test2: Length<["a", "b", "c", "d", "e"]> = 4; // expected 5
