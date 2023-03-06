import declinationExecutor from "..";
import { PluralsType } from "../declinationExecutor.typings";

const plurals: PluralsType = ["tomato", "tomato", "tomatoes"];

const mock = [
  {
    description: "one",
    count: 1,
    result: plurals[0],
  },
  {
    description: "one",
    count: 21,
    result: plurals[0],
  },
  {
    description: "one",
    count: 31,
    result: plurals[0],
  },
  {
    description: "one",
    count: 41,
    result: plurals[0],
  },
  {
    description: "one",
    count: 101,
    result: plurals[0],
  },
  {
    description: "few",
    count: 2,
    result: plurals[1],
  },
  {
    description: "few",
    count: 3,
    result: plurals[1],
  },
  {
    description: "few",
    count: 4,
    result: plurals[1],
  },
  {
    description: "few",
    count: 54,
    result: plurals[1],
  },
  {
    description: "few",
    count: 104,
    result: plurals[1],
  },
  {
    description: "many",
    count: 0,
    result: plurals[2],
  },
  {
    description: "many",
    count: 5,
    result: plurals[2],
  },
  {
    description: "many",
    count: 6,
    result: plurals[2],
  },
  {
    description: "many",
    count: 50,
    result: plurals[2],
  },
  {
    description: "many",
    count: 110,
    result: plurals[2],
  },
  {
    description: "many",
    count: 500,
    result: plurals[2],
  },
];

describe("declinationExecutor", () => {
  test.each(mock)("%#: %o", (testCase) => {
    const { count, result } = testCase;
    expect(declinationExecutor(count, plurals)).toBe(result);
    expect(declinationExecutor(count, plurals)).toMatchSnapshot();
  });
});
