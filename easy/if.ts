/* Type-Challenges: No.268 */

/* If 구현하기 */
type If<C extends boolean, T, F> = C extends true ? T : F;

/* Test */
const example: If<true, "a", "b"> = "a";
const example2: If<false, "a", "b"> = "a";
const example3: If<false, "a", "b"> = "b";
