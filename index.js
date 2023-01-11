// Запитувати у користувача число до тих пір, доки воно не буде більше 15 і менше 35 і кратне 6 (18,24,30 підходить)
// В користувача є 3 спроби
// зробити двома способами через while і for

const MIN_VALUE = 15;
const MAX_VALUE = 35;
const MULT_VALUE = 6;
const NUM_TRY = 3;

/**
 *
 * @param {number} minVal
 * @param {number} maxVal
 * @param {number} multVal
 * @param {number} numTry
 * @returns {boolean}
 */
function checkUserValueWhile(minVal, maxVal, multVal, numTry) {
  let count = 0;
  while (count < numTry) {
    const userNum = Number(prompt("3 спроб 18,24,30"));
    count++;
    if (userNum > minVal && userNum < maxVal && userNum % multVal === 0) {
      return true;
    }
  }
  return false;
}

/**
 *
 * @param {number} minVal
 * @param {number} maxVal
 * @param {number} multVal
 * @param {number} numTry
 * @returns {boolean}
 */
function checkUserValueFor(minVal, maxVal, multVal, numTry) {
  for (let index = 0; index < numTry; index++) {
    const userNum = Number(prompt("3 спроб 18,24,30"));
    if (userNum > minVal && userNum < maxVal && userNum % multVal === 0) {
      return true;
    }
  }
  return false;
}

console.log(checkUserValueFor(MIN_VALUE, MAX_VALUE, MULT_VALUE, NUM_TRY));
console.log(checkUserValueWhile(MIN_VALUE, MAX_VALUE, MULT_VALUE, NUM_TRY));

// function getUserValueWhile(tryNum) {
//   let count = 0;
//   let userNum;
//   while (count < tryNum) {
//     const userInput = prompt();
//     userNum = Number(userInput);
//     count++;
//   }
// // function getUserValueFor(tryNum) {
// //   for (let index = 0; index < tryNum; index++) {
// //     const userInput = prompt();
// //     const userNum = Number(userInput);
// //   }
// ction checkCondition(minVal, maxVal, multVal) {
//   userNum = getUserValueWhile(MAX_TRY);
//   if (userNum > minVal && userNum < maxVal && userNum % multVal === 0) {
//     return true;
//   }

// //  condition ? true : false

// function returnParityWord(number) {
//   //   if (number % 2 === 0) {
//   //     return "even";
//   //   }
//   //   return "odd";
//   return number % 2 === 0 ? "even" : "odd";
// }

// const summa = 1234435;
// const sale = summa > 1000 ? 5 : 0.5;
// const de = summa > 500 ? 0 : 30;

// const num1 = 5;
// const num2 = 10;

// const result = num1 > num2 ? num1 : num2;

// console.log(result);

// const num = 30;

// const userInput = prompt();
// const numUserInput = Number(userInput);
// switch (numUserInput) {
//   case "1":
//   case "2":
//   case "12":
//     console.log("baby");
//     break;
//   case "3":
//   case "4":
//   case "5":
//     console.log("spring");
//     break;
//   case "6":
//   case "7":
//   case "8":
//     console.log("summer");
//     break;
//   case "9":
//   case "10":
//   case "11":
//     console.log("fall");
//     break;
//   default:
//     console.log("error");
//     break;
// }

// const userInput = prompt();
// const numUserInput = Number(userInput);

// if (
//   userInput === null ||
//   userInput === "" ||
//   Number.isNaN(numUserInput) ||
//   numUserInput < 1 ||
//   numUserInput > 31
// ) {
//   console.log("error");
// } else if (numUserInput % 7 === 0) {
//   console.log("Sunday");
// } else if (numUserInput % 7 === 1) {
//   console.log("Monday");
// } else if (numUserInput % 7 === 2) {
//   console.log("Tuesday");
// } else if (numUserInput % 7 === 3) {
//   console.log("Wednesday");
// } else if (numUserInput % 7 === 4) {
//   console.log("Thursday");
// } else if (numUserInput % 7 === 5) {
//   console.log("Friday");
// } else if (numUserInput % 7 === 6) {
//   console.log("Saturday");
// }

// if (
//   userInput === null ||
//   userInput === "" ||
//   Number.isNaN(numUserInput) ||
//   numUserInput < 1 ||
//   numUserInput > 31
// ) {
//   console.log("error");
// } else {
//   switch (numUserInput % 7) {
//     case 0:
//       console.log("Sunday");
//       break;
//     case 1:
//       console.log("Monday");
//       break;
//     case 2:
//       console.log("Tuesday");
//       break;
//     case 3:
//       console.log("Wednesday");
//       break;
//     case 4:
//       console.log("Thursday");
//       break;
//     case 5:
//       console.log("Friday");
//       break;
//     case 6:
//       console.log("Saturday");
//       break;
//     default:
//       console.log("error");
//       break;
//   }
// }

// let count = 0;
// while (count <= 20 ) {
// console.log(count)
// count +=2;
// }

// while (true){
//   if(count%2){
//     count++;
//     continue;
//   }
//   console.log(count++);
//   if(count > 20) break;
// }

// for (let index = 0; index <= 6; index++) {
//   if(index%2) continue;
//   console.log(index);
// }

// while (true) {
//   const userInput = prompt("pin");

//   if (userInput !== PIN) {
//     console.log("try again");
//     continue;
//   }
//   console.log(userInput);
//   break;
// }

// while (true) {
//   const userInput = prompt("pin");

//   if (userInput === PIN) {
//     console.log(userInput);
//     break;
//   }
//   console.log("try again");
// }

// const PIN = "1111";
// const MAX_TRY = 3;
// let count = 0;
// // while (count < MAX_TRY) {
// //   if (prompt("pin") === PIN) {
// //     console.log("1111");
// //     break;
// //   }
// //   count++;
// // }

// for (let index = 0; index < MAX_TRY; index++) {
//   if (prompt("pin") === PIN) {
//     console.log("1111");
//     break;
//   }
// }
