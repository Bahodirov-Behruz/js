var num1 = prompt("Iltimos birinchi sonni kiriting?");
var opr = prompt("Iltimos ishorarani kiriting");
var num2 = prompt("Iltimos ikkinchi sonni kiriting?");
if (opr == "+") {
  console.log( +num1 + +num2);
} else if (opr == "-") {
  console.log(num1 - num2);
} else if (opr == "*") {
  console.log(num1 * num2);
} else if (opr == "/") {
  console.log(num1 / num2);
} else {
  console.log("error");
}

// let kalkulator = minus;
// if (kalkulator == plus) {
//   let num11 = prompt("birinchi sonni kirit");
//   let num12 = prompt("ikkinchi sonni kirit");
//   let resault = num11 * num12;
//   console.log(resault);
//  }
//  else if (kalkulator == minus) {
//   let num2 = prompt("birinchi sonni kirit");
//   let num1 = prompt("ikkinchi sonni kirit");
//   let resault = num2 + num1;
//   console.log(resault);
// }

// let num = false;
// console.log(num || "Bu false qiymati");
// let kalkulator = plus;

// if (kalkulator == plus) {
//   console.log(" +num11 + +num12");
// } else if (kalkulator == minus) {
//     console.log(" -num11 - -num12");
// }

// console.log(folse || " havo bulutli")
