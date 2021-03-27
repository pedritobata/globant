export default function getTeamsDependencies(data) {
  const teamsMap = {};
  const result = [];
  for (let item of data) {
    const team = item[0];
    const dependency = item[1];
    const ticket = item[2];

    if (!teamsMap[team]) {
      teamsMap[team] = {
        [dependency]: {
          [ticket]: ticket,
        },
      };
    } else {
      if (!teamsMap[team][dependency]) {
        teamsMap[team][dependency] = {
          [ticket]: ticket,
        };
      } else {
        teamsMap[team][dependency] = {
          ...teamsMap[team][dependency],
          [ticket]: ticket,
        };
      }
    }
  }
  for (let team in teamsMap) {
    result.push({
      dependencies: Object.keys(teamsMap[team]).map((dep) => ({
        name: dep,
        tickets: Object.keys(teamsMap[team][dep]).map((tkt) => ({
          name: tkt,
        })),
      })),
      name: team,
    });
  }
  return JSON.stringify(result);
}
