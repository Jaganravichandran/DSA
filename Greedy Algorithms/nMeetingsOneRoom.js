// N meetings in one room

function maxMeetings(start, end) {
  let n = start.length;
  let data = [];
  for (let i = 0; i < n; i++) {
    data.push({ start: start[i], end: end[i], position: i + 1 });
  }
  data.sort((a, b) => a.end - b.end);
  let count = 1;
  let freeTime = data[0].end;
  let ds = [];
  ds.push(data[0].position);
  for (let i = 1; i < n; i++) {
    if (data[i].start > freeTime) {
      count++;
      freeTime = data[i].end;
      ds.push(data[i].position);
    }
  }
  return count;
}

let start = [0, 3, 1, 5, 5, 8];
let end = [5, 4, 2, 9, 7, 9];
let res = maxMeetings(start, end);
console.log(res);
