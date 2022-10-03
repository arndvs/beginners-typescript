import { expect, it } from "vitest";



// Solution 1: Pass the Object Type Directly
export const addTwoBurritos = (burritos: {first: number; second: number}) => {
  return burritos.first + burritos.second;
};

// Solution 2: Create a Named Type
type taquitoArgs = {
    first: number;
    second: number;
}

export const addTwoTaquitos = (taquitos: taquitoArgs) => {
    return taquitos.first + taquitos.second
};


// Solution 3: Create a named Interface
interface tacosTypes {
    first: number;
    second: number;
}

export const addTwoTacos = (tacos: tacosTypes) => {
  return tacos.first + tacos.second;
};


it("Should add the two numbers together", () => {
  expect(
    addTwoTacos({
      first: 2,
      second: 4,
    }),
  ).toEqual(6);

  expect(
    addTwoTacos({
      first: 10,
      second: 20,
    }),
  ).toEqual(30);
});
