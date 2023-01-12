"use strict";
// const calcTips = (bill) => {
//   return bill >= 0 && bill <= 500 ? bill * 0.1 : bill * 0.2;
// };
// const bills = [50, 100, 500, 1000, 88, 501];
// const tips = [];
// const totals = [];
// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTips(bills[i]));
//   totals.push(bills[i] + tips[i]);
// }
// console.log(tips, totals);

// const calcAvg = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return `${sum / arr.length}`;
// };

// console.log(
//   Math.trunc(calcAvg(bills)),
//   Math.trunc(calcAvg(tips)),
//   Math.trunc(calcAvg(totals))
// );

// const arr = [2023, 2000, 56, 1976, 3, 2022, 4, 77, 0];
// const calcTempAmplitude = (arr) => {
//   let max = arr[0];
//   let min = arr[0];
//   let error = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     } else if (arr[i] < min) {
//       min = arr[i];
//     } else if (typeof arr[i] === "string") {
//     }
//     error = "Error";
//   }
//   console.log(max);
//   console.log(min);
//   console.log(error);
// };
// calcTempAmplitude(arr);
// calcTempAmplitude([4, 1976, -7, "9"]);

const arr1 = [2023, 2000, 56, 1976, 23, 2022, "JavaScript", 47, 77];
const arr2 = [13, 1976, 99, "John Rambo"];
const calcTempAmplitude = (t1, t2) => {
  const arr = t1.concat(t2);
  let max = arr[0];
  let min = arr[0];
  let error = "";
  for (let i = 0; i < arr.length; i++) {
    const currentTemp = arr[i];
    // if (typeof currentTemp == "string") break;
    if (typeof currentTemp !== "number") {
      continue;
    }
    if (currentTemp > max) {
      max = currentTemp;
    }
    if (currentTemp < min) {
      min = currentTemp;
    }
  }
  console.log(max);
  console.log(min);
  return max - min;
};
const amplitude = calcTempAmplitude(arr1, arr2);
console.log(amplitude);
