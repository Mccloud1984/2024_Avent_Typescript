import type { Expect, Equal } from "type-testing";

/*Original Code */
// const createRoute = <
//   Route extends string[] ///{ [K in keyof Route]: Route[K] } //{[K in keyof Route]: { [P in K]: Route }}
// >(
//   author: string,
//   route: Route
// ) => ({
//   author,
//   route,
//   createdAt: Date.now(),
// });

/*Fixed Code */
const createRoute = <
  Route extends string[] ///{ [K in keyof Route]: Route[K] } //{[K in keyof Route]: { [P in K]: Route }}
>(
  author: string,
  route: { [K in keyof Route]: Route[K] }
) => ({
  author,
  route,
  createdAt: Date.now(),
});

// export type ValuesOf<T extends string[]>= T[number];

//* TESTS CODE ABOVE */
const oneMill = createRoute("💨Dasher", [
  "Atherton",
  "Scarsdale",
  "Cherry Hills Village",
]).route;
type t0_actual = typeof oneMill; // =>
type t0_expected = [
  // =>
  "Atherton",
  "Scarsdale",
  "Cherry Hills Village"
];
type t0 = Expect<Equal<t0_actual, t0_expected>>;

const two = createRoute("🌟Vixen", ["Detroit", "Cleveland", "Dayton"]).route;
type t1_actual = typeof two; // =>
type t1_expected = [
  // =>
  "Detroit",
  "Cleveland",
  "Dayton"
];
type t1 = Expect<Equal<t1_actual, t1_expected>>;
