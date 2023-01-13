/* Type-Challenges: No.533 */

/* concat 구현하기 */
type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];

/* Test */
const test1: Concat<["a", "b"], [2]> = ["a", "b", 2];
const test2: Concat<[1], [2]> = [1, 2, 3]; // error
