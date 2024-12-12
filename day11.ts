import type { Expect, Equal } from "type-testing";
/*Original Code */
//type Execuse = unknown;

/*Fixed Code */
type ExcuseType<T> = T extends Record<string, string>
  ? {
      [K in keyof T]: K extends keyof typeof existingExcuses
        ? never
        : `${K & string}: ${T[K] & string}`;
    }[keyof T]
  : never;

type ExcuseConstructor<T extends Record<string, string>> = new (
  input: typeof existingExcuses & T
) => ExcuseType<T>;

function CreateExcuse<
  T extends Record<string, string>
>(): ExcuseConstructor<T> {
  return class {
    constructor(input: typeof existingExcuses & T) {
      const newExcuse = Object.entries(input).find(
        ([key]) => !(key in existingExcuses)
      );
      return (
        newExcuse ? `${newExcuse[0]}: ${newExcuse[1]}` : ""
      ) as ExcuseType<T>;
    }
  } as any;
}

type Excuse<T extends Record<string, string>> = ReturnType<
  typeof CreateExcuse<T>
>;

//* TESTS CODE ABOVE */

const existingExcuses = {
  karaoke: ["Kendrick Lamar, Opeth"],
  margarita: "Peppermint-Jalapeño Mojito",
};

const helpingTheReindeer = {
  helping: "the reindeer",
} as const;
declare const Excuse0: Excuse<typeof helpingTheReindeer>;
const excuse0 = new Excuse0({
  ...existingExcuses,
  ...helpingTheReindeer,
});
type t0_actual = typeof excuse0; // =>
type t0_expected = "helping: the reindeer"; // =>
type t0 = Expect<Equal<t0_actual, t0_expected>>;

const eatingFudge = {
  eating: "fudge",
} as const;
declare const Excuse1: Excuse<typeof eatingFudge>;
const excuse1 = new Excuse1({
  ...existingExcuses,
  ...eatingFudge,
});
type t1_actual = typeof excuse1; // =>
type t1_expected = "eating: fudge"; // =>
type t1 = Expect<Equal<t1_actual, t1_expected>>;
