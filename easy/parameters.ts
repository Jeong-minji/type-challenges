/* Type-Challenges: No.3312 */

/* Parameters 구현하기 */
type MyParameters<T extends (...args: any[]) => any> = Parameters<T>;

/* Test */

const foo = (arg1: string, arg2: number): void => {};

type FunctionParamsType = MyParameters<typeof foo>;

const example: FunctionParamsType = ["string", 4];
