/* Type-Challenges: No.3060 */

/* Unshift 구현하기 */
type Unshift<T extends unknown[], U> = [U, ...T];

/* Test */
type Result = Unshift<[1, 2], 0>;

const example: Unshift<[1, 2], 0> = [0, 1, 2];
