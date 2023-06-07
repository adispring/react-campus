function* gen() {
  while (true) {
    try {
      yield 42;
      yield 43;
    } catch (e) {
      console.log('Error caught!');
    }
  }
}

var g = gen();
console.log(g.next()); // { value: 42, done: false }
console.log(g.return('foo')); // { value: "foo", done: true }
// g.throw(new Error('Something went wrong')); // "Error caught!"
console.log(g.next()); // { value: 42, done: false }
console.log(g.next()); // { value: 42, done: false }

function* countAppleSales() {
  const saleList = [3, 7, 5];
  for (let i = 0; i < saleList.length; i++) {
    console.log('before yield saleList[i]: ', saleList[i]);
    const leftVal = yield saleList[i];
    console.log('after yield leftVal: ', leftVal);
  }
}

const appleStore = countAppleSales(); // Generator { }console.log(appleStore.next('a')); // { value: 3, done: false }
console.log(appleStore.next('a')); // { value: 3, done: false }
console.log('------------------------');
console.log(appleStore.next('b')); // { value: 7, done: false }
console.log('------------------------');
console.log(appleStore.next('c')); // { value: 5, done: false }
console.log('------------------------');
console.log(appleStore.next('d')); // { value: undefined, done: true }

function* counter(value) {
  let step;

  while (true) {
    step = yield value++;
    if (step) {
      value += step;
    }
  }
}

const generatorFunc = counter(0);
console.log(generatorFunc.next().value); // 0
console.log(generatorFunc.next().value); // 1
console.log(generatorFunc.next().value); // 2
console.log(generatorFunc.next().value); // 3
console.log(generatorFunc.next(10).value); // 14
console.log(generatorFunc.next().value); // 15
console.log(generatorFunc.next(10).value); // 26
