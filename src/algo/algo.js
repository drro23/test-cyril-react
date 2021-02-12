function pauseDays(concours, joursConsecutifs) {
  for (let i = 1; i < concours; i++) {
    if (joursConsecutifs * i > concours) {
      if (concours % 2 === 0) return i - 1;
      else return i - 2;
    }
  }
}

function concours(gainPossibles, joursConsecutifs) {
  let totalArgent = 0;
  // trouver le nombre de jours qu'on doit se reposer
  let pause = pauseDays(gainPossibles.length, joursConsecutifs);
  console.log("pause:", pause);
  if (pause <= 0) {
    gainPossibles.forEach((e) => (totalArgent += e));
    return totalArgent;
  }
  let splicedArrays = [];

  while (gainPossibles.length > 0) {
    splicedArrays.push(gainPossibles.splice(0, joursConsecutifs + 1));
  }

  console.log("splicedArrays: ", splicedArrays);

  let globalMins = [];

  splicedArrays.forEach((e, i) => {
    if (i < pause) {
      globalMins.push(Math.min(...e));
    }
  });

  console.log("globalMins", globalMins);

  for (let i = 0; i < splicedArrays.length; i++) {
    let min = Math.min(...splicedArrays[i]);
    let indexOfMin = splicedArrays[i].indexOf(min);
    if (splicedArrays.length === 1 && pause === 1) {
      splicedArrays[i].forEach((e) => {
        totalArgent += e;
      });
    } else if (splicedArrays[i].length >= joursConsecutifs && i !== pause) {
      splicedArrays[i].forEach((e, i) => {
        if (e !== min && i !== indexOfMin) {
          totalArgent += e;
        } else if (e === min && i !== indexOfMin) {
          totalArgent += e;
        }
      });
    } else {
      splicedArrays[i].forEach((e) => {
        totalArgent += e;
      });
    }
  }

  return totalArgent;
}

let gain1 = [13, 12, 11, 9, 16, 17, 100];
let consecutif1 = 3; // total = 169

let gain2 = [12, 14, 52, 7, 3, 1, 1, 89, 98, 100, 12, 5, 6, 8];
let consecutif2 = 4; // total = 399

let gain3 = [10, 12, 11, 9, 17, 8, 13];
let consecutif3 = 2;

let gain4 = [20, 30, 27, 24, 23, 28, 33, 38, 34, 35];
let consecutif4 = 10;

console.log(concours(gain1, consecutif1));
console.log(concours(gain2, consecutif2));
console.log(concours(gain3, consecutif3));
console.log(concours(gain4, consecutif4));
