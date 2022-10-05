import { expect, it } from "vitest";
import { Equal, Expect } from "./helpers/type-utils";

const guitarists = new Set<string>();

const map = new Map<string, string>();

guitarists.add("Jimi Hendrix");
guitarists.add("Eric Clapton");

map.set("Jimi Hendrix", "Guitar");
map.set("Eric Clapton", "Guitar");
map.set("James Hetfield", "Guitar");

it("Should contain Jimi and Eric", () => {
  expect(guitarists.has("Jimi Hendrix")).toEqual(true);
  expect(guitarists.has("Eric Clapton")).toEqual(true);
});

it("Should give a type error when you try to pass a non-string", () => {
  guitarists.add('James Hetfield');
});

it("Should be typed as an array of strings", () => {
  const guitaristsAsArray = Array.from(guitarists);

  type tests = [Expect<Equal<typeof guitaristsAsArray, string[]>>];
});
