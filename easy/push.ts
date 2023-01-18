/* Type-Challenges: No.3057 */

/* Push 구현하기 */
type Push<T extends unknown[], U> = [...T, U];

/* Test */
const example: Push<[1, 2], "3"> = [1, 2, "3"];
