import getTeamsDependencies from "../exercise1";
import { output } from '../guidelines';

const inputData = [
  ["team1", "dep1", "tkt1"],
  ["team2", "dep1", "tkt2"],
  ["team2", "dep3", "tkt75"],
  ["team2", "dep1", "tkt10"],
];

describe("Exercise 1", () => {
    it('Should return propper output as expected in guidelines', () => {
      expect(getTeamsDependencies(inputData)).toBe(output);
    })
});
