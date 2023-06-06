// function* infinite() {
//   let index = 0;

//   while (true) {
//     yield index++;
//   }
// }

// const generator = infinite(); // "Generator { }"

// console.log(generator.next().value); // 0
// console.log(generator.next().value); // 1
// console.log(generator.next().value); // 2

// function* myGenerator() {
//   const result = yield new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Promise resolved');
//     }, 1000);
//   });
//   console.log(result);
// }

// const gen = myGenerator();
// const promise = gen.next().value;

// promise.then((result) => {
//   console.log('promise.then.result: ', result);
//   gen.next(result);
// });

// function* counter(value) {
//   while (true) {
//     const step = yield value++;

//     if (step) {
//       value += step;
//     }
//   }
// }

// const generatorFunc = counter(0);
// console.log(generatorFunc);
// console.log(generatorFunc.next().value); // 0
// console.log(generatorFunc.next().value); // 1
// console.log(generatorFunc.next().value); // 2
// console.log(generatorFunc.next().value); // 3
// console.log(generatorFunc.next(10).value); // 14
// console.log(generatorFunc.next().value); // 15
// console.log(generatorFunc.next(10).value); // 26

// function* gen() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// var g = gen(); // "Generator { }"
// console.log(g.next()); // "Object { value: 1, done: false }"
// console.log(g.next()); // "Object { value: 2, done: false }"
// console.log(g.next()); // "Object { value: 3, done: false }"
// console.log(g.next()); // "Object { value: undefined, done: true }"

function* gen() {
  while (true) {
    var value = yield null;
    console.log(value);
  }
}

var g = gen();
console.log(g.next(1)); // "{ value: null, done: false }"
console.log(g.next(2)); // "{ value: null, done: false }"

// 2
// "{ value: null, done: false }"
