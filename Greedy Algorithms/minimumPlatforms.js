// minimum platforms required for railway station

// Brute
function findPlatformsBrute(arr, dep) {
  let n = arr.length;
  arr.sort((a, b) => a - b);
  dep.sort((a, b) => a - b);
  let maxPlatforms = 1;
  for (let i = 0; i < n; i++) {
    let platformsNeeded = 1;
    for (let j = i + 1; j < n; j++) {
      if (arr[i] <= dep[j] && arr[j] <= dep[i]) {
        platformsNeeded++;
      }
    }
    maxPlatforms = Math.max(maxPlatforms, platformsNeeded);
  }
  return maxPlatforms;
}

// Better
function findPlatformsBetter(arr, dep) {
  let n = arr.length;
  let events = [];
  for (let i = 0; i < n; i++) {
    events.push({ time: arr[i], type: "arrival" });
    events.push({ time: dep[i], type: "departure" });
  }

  events.sort((a, b) => {
    if (a.time != b.time) {
      return a.time - b.time;
    }
    return a.type === "arrival" ? -1 : 1;
  });

  let platformsInUse = 0;
  let maxPlatforms = 0;
  for (let event of events) {
    if (event.type === "arrival") {
      platformsInUse++;
    } else {
      platformsInUse--;
    }
    maxPlatforms = Math.max(maxPlatforms, platformsInUse);
  }
  return maxPlatforms;
}

// Optimal
function findPlatforms(arr, dep) {
  let arrivals = [...arr].sort((a, b) => a - b);
  let departures = [...dep].sort((a, b) => a - b);

  let platformsInUse = 0;
  let maxPlatforms = 0;
  let i = 0;
  let j = 0;
  let n = arr.length;
  let m = dep.length;
  while (i < n && j < m) {
    if (arrivals[i] <= departures[j]) {
      platformsInUse++;
      i++;
    } else {
      platformsInUse--;
      j++;
    }
    maxPlatforms = Math.max(maxPlatforms, platformsInUse);
  }

  while (i < n) {
    platformsInUse++;
    i++;
    maxPlatforms = Math.max(maxPlatforms, platformsInUse);
  }
  return maxPlatforms;
}

let arr = [900, 940, 950, 1100, 1500, 1800];
let dep = [910, 1200, 1120, 1130, 1900, 2000];

// let res = findPlatformsBrute(arr, dep);
// let res = findPlatformsBetter(arr, dep);
let res = findPlatforms(arr, dep);
console.log(res);

// Visualization/Intution that helped undertand why we sorted the departure data:

// - Firstly, notice that the time pairs(arrive,depart) is NOT same as depart,arrive like in airplane.
//    ->when train arrives, its jus sitting at station doing nothing!  With that said, we do not have to view
//    arrive, depart as one unit of data tied together.

// -So the person responsible for clearing assigning tracks is basically just looking at his clock the whole time!!
//     ->After every few minutes, he is going to do one of 3 things:
//         -do nothing (neither arrival not departure happened) //no need to code this
//         -clear a track (becuase it departed)
//             ->to do this, it would be convenient for the depart times to be in sorted order.
//         -open new track (because new train arrived before an old train departed)
//              ->to do this, it would be convenient for arrival times to be in sorted order
//                 -NOTE: arrival times are by default given in sorted order so idk why we had to sort it.
