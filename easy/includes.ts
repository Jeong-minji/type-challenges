/* Type-Challenges: No.898 */

/* includes 구현하기 */
type Includes<T extends unknown[], U> = U extends T[number] ? true : false;

/* TEST */
const test: Includes<["a", "b", "c"], "a"> = true;
const test2: Includes<["a", "b", "c"], "d"> = false;
const test3: Includes<["a", "b", "c"], "d"> = true; // error
