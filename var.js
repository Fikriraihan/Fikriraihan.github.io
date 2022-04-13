// let arr2 = [-4, 3, -9, 0, 4, 1];
// let apositive = 0;
// let anegative = 0;
// let azero = 0;
// let array2 = [];
// function plusMinus(arr) {
//   var length = arr.length;
//   for (let i = 0; i < arr.length; i++) {
//     if (i === 0) {
//       azero++;
//     } else if (i > 0) {
//       apositive++;
//     } else if (i < 0) {
//       anegative++;
//     }
//     totalpositive = apositive / length;
//     totalnegative = anegative / length;
//     totalzero = azero / length;
//     arr3 = (totalpositive, totalnegative, totalzero);
//     return arr2;
//   }
//   arr2 = arr3;
//   return arr2;
// }
// console.log(plusMinus(arr2));

/*
     * Write your code here.
     
     */
// let array = [-4, 3, -9, 0, 4, 1];
// function plusMinus(params) {
//   let zero = 0;
//   let plus = 0;
//   let minus = 0;
//   params.map((item) => {
//     if (item === 0) {
//       zero++;
//     } else if (item > 0) {
//       plus++;
//     } else if (item < 0) {
//       minus++;
//     }
//   });
//   let plus2 = plus / params.length;
//   let minus2 = minus / params.length;
//   let zero2 = zero / params.length;
//   console.log(plus2.toFixed(6) + "\n" + minus2.toFixed(6) + "\n" + zero2.toFixed(6));
// }
// plusMinus(array);
// console.log(plusMinus([-4, 3, -9, 0, 4, 1]));

// let array = [-4, 3, -9, 0, 4, 1];
// function plusMinus(params) {
//   let zero = 0;
//   let plus = 0;
//   let minus = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === 0) {
//       zero++;
//     } else if (array[i] > 0) {
//       plus++;
//     } else if (array[i] < 0) {
//       minus++;
//     }
//   }
//   let plus2 = plus / params.length;
//   let minus2 = minus / params.length;
//   let zero2 = zero / params.length;
//   //   console.log(plus2);
//   console.log(plus2.toFixed(6) + "\n" + minus2.toFixed(6) + "\n" + zero2.toFixed(6));
// }
// plusMinus(array);
