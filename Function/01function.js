// // console.log(square(5));// ReferenceError: Cannot access 'square' before initialization
// // const square = function (n) {
// //   return n * n;
// // };
// // function loop(x) {
// //     // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
// //     if (x >= 10) {
// //       return;
// //     }
// //     // do stuff
// //     loop(x + 1); // the recursive call
// //   }
// //   loop(110);
// function foo(i) {
//     if (i < 0) {
//       return;
//     }
//     console.log(`begin: ${i}`);
//     foo(i - 1);
//     console.log(`end: ${i}`);
//   }
//   foo(3);
  
//   // Logs:
//   // begin: 3
//   // begin: 2
//   // begin: 1
//   // begin: 0
//   // end: 0
//   // end: 1
//   // end: 2
//   // end: 3
  
// function outside(x) {
//     function inside(y) {
//       return x + y;
//     }
//     return inside;
//   }
  
//   const fnInside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
//   console.log(fnInside(5)); // 8
//   console.log(outside(3)(5)); // 8
function A(x) {
    function B(y) {
      function C(z) {
        console.log(x + y + z);
      }
      C(3);
    }
    B(2);
  }
  A(1); // Logs 6 (which is 1 + 2 + 3)
  