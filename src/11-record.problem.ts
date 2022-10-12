import { expect, it } from "vitest";

const createCache = () => {
  const cache: Record<string, string> = {};
  // Record is a utlity type
  // when you see index in a type error, it's usually referring to the key of an object

// this would also work
// const cache: {
//     [id: string]: string;
//     } = {}


  const add = (id: string, value: string) => {
    cache[id] = value;
  };

  const remove = (id: string) => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};

it("Should add values to the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");

  expect(cache.cache["123"]).toEqual("Matt");
});

it("Should remove values to the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");
  cache.remove("123");

  expect(cache.cache["123"]).toEqual(undefined);
});


 // rewrite the code above so there aee no errors in typescript
