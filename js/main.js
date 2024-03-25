// var num1 = prompt("Iltimos birinchi sonni kiriting?");
// var opr = prompt("Iltimos ishorarani kiriting");
// var num2 = prompt("Iltimos ikkinchi sonni kiriting?");
// if (opr == "+") {
//   console.log( +num1 + +num2);
// } else if (opr == "-") {
//   console.log(num1 - num2);
// } else if (opr == "*") {
//   console.log(num1 * num2);
// } else if (opr == "/") {
//   console.log(num1 / num2);
// } else {
//   console.log("error");
// }

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

// var opr = prompt("balni kiriting");

// if (opr == " 90 > 100") {
//   console.log("Siz uqishga grant asosida qabul qilindingiz");
// } else if ("90 < 75") {
//   console.log("Siz uqishga kantrak asosida uqisiz");
// } else if ("75 < 1") {
//   console.log("Siz uqishga supper kantrak asosida uqisiz");
// } else "saytda xatolik bor";

// var num1 = prompt("Iltimos birinchi sonni kiriting?");
// var opr = prompt("Iltimos ishorarani kiriting");
// var num2 = prompt("Iltimos ikkinchi sonni kiriting?");

// switch (opr == "+") {
//   case "+":
//     console.log(+num1 + +num2);
//     break;
//     case "-"
//     // console.log( num1 - num2);
// }
// let oy = prompt("Qidiryotgan oyning raqamini kiriting");
// switch (oy) {
//   case "1":
//     console.log("Yanvar");
//     break;
//   case "2":
//     console.log("Fevral");
//     break;
//   case "3":
//     console.log("Mart");
//     break;
//   case "4":
//     console.log("Aprel");
//     break;
//   case "5":
//     console.log("May");
//     break;
//   case "6":
//     console.log("Iyun");
//     break;
//   case "7":
//     console.log("Iyul");
//     break;
//   case "8":
//     console.log("Avgust");
//     break;
//   case "9":
//     console.log("Sentyabr");
//     break;
//   case "10":
//     console.log("Oktyabr");
//     break;
//   case "11":
//     console.log("Noyabr");
//     break;
//   case "12":
//     console.log("Dekabr");
//     break;
//   default:
//     console.log("siz notugri raqam kiritdingiz");
// }

// let str = "Aa ksca a knas amet aanvAAdkndA.";
// let text = 0;
// let box = "";
// let count = 0;

// while (count < str.length) {
//   if (str[count] == "a" || str[count] == "A") {
//     text++;
//     box += "$";
//   } else {
//     box += str[count];
//   }
//   count++;
// }
// console.log(text);
// console.log(box);

// let str = "behruz";
// let count = 0;
// for (count < str.length) {
// }

// for ( behruz = 6; behruz > 0; behruz--) {
//   console.log(behruz + " -behruz");
// }
// let num = 15;
// for (; num < 31; num++){
//   console.log(num)
// }

// let oper = prompt("Matematik amalni kiriting");
// let num1 = +prompt("Son kiriting");
// let num2 = +prompt("Son kiriting");

// function calc(opp, num3, num4) {
//   let calc;
//   switch (opp) {
//     case "+":
//       calc = +num3 + +num4;
//       return calc;
//     case "-":
//       calc = num3 - num4;
//       return calc;
//     case "*":
//       calc = num3 * num4;
//       return calc;
//     case "/":
//       calc = num3 / num4;
//       return calc;
//     default:
//       calc = "bunaqangi amal mavjud emas";
//       return calc;
//   }
// }

let opr = prompt(" Ishorani kiriting");
let num1 = +prompt("Birinchi sonni kiriting");
let num2 = +prompt("Ikkinchi sonni kiriting");
function calc(num1, opr, num2) {
  let calc;
  switch (opr) {
    case "+":
      calc = +num1 + +num2;
      return calc;
    case "-":
      calc = num1 - num2;
      return calc;
    case "*":
      calc = num1 * num2;
      return calc;
    case "/":
      calc = num1 / num2;
      return calc;
    default:
      calc = "Notug'ri amal yozildi";
      return calc;
  }
}
console.log(calc(num1, opr, num2));

// <!-- let oper = prompt(" Ishorani kiriting");
// let num1 = +prompt("Sonni kiriting");
// let num2 = +prompt("Sonni kiriting");
// function calc(num1, oper, num2) {
//   let calc;
//   if (oper == "+") {
//     calc = +num1 + +num2;
//   } else if (oper == "-") {
//     calc = num1 - num2;
//   } else if (oper == "/") {
//     calc = num1 * num2;
//   } else if (oper == "*") {
//     calc = num1 / num2;
//   } else {
//     calc = error;
//   }
//   return calc(num1, oper, num2);
// } -->
