// Job sequencing problem

function jobSequencingBrute(id, deadline, profit) {
  let jobs = [];
  for (let i = 0; i < id.length; i++) {
    jobs.push({ id: id[i], deadline: deadline[i], profit: profit[i] });
  }

  jobs.sort((a, b) => b.profit - a.profit);

  let maxiDeadline = Math.max(...deadline);

  let timeSlots = new Array(maxiDeadline).fill(-1);
  let jobCount = 0;
  let totalProfit = 0;

  for (let job of jobs) {
    for (let i = job.deadline - 1; i >= 0; i--) {
      if (timeSlots[i] == -1) {
        timeSlots[i] = job.id;
        jobCount++;
        totalProfit += job.profit;
        break;
      }
    }
  }
  return [jobCount, totalProfit];
}

let id = [1, 2, 3, 4, 5];
let deadline = [2, 1, 2, 1, 1];
let profit = [100, 19, 27, 25, 15];

let res = jobSequencingBrute(id, deadline, profit);
console.log(res);
