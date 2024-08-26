const { getAllMachines } = require('../my-data-module');

const daysFrom = (from, to) => {
  const ms = from.getTime() - new Date(to).getTime();
  const diff = ms / 1000 / 60 / 60 / 24; // 초 * 분 * 시간
  console.log(diff);
  return diff;
};

const findRecentlyRebooted = (maxDays, fromDate) => {
  const machines = getAllMachines();
  return machines.filter((machine) => {
    const daysDiff = daysFrom(fromDate, machine.lastBootTime);
    console.log(`${daysDiff} vs ${maxDays}`);
    return daysDiff < maxDays;
  });
};

module.exports = {
  findRecentlyRebooted,
};
