import { expect, it } from "vitest";


interface params {
    first: string
    last?: string
}

export const getDinner = (params: params) => {
  if (params.last) {
    return `${params.first} ${params.last}`;
  }
  return params.first;
};

it("Should work with just the first name", () => {
  const name = getDinner({
    first: "Chicken",
  });

  expect(name).toEqual("Chicken");
});

it("Should work with the first and last name", () => {
  const name = getDinner({
    first: "Chicken",
    last: "Pizza",
  });

  expect(name).toEqual("Chicken Pizza");
});
