// Datatype/Control_Flow/for.ts
// Simple examples of different `for` loop styles in TypeScript

function basicFor() {
  const nums: number[] = [1, 2, 3, 4, 5];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  console.log('basicFor sum =', sum);
}

function forOfExample() {
  const fruits = ['apple', 'banana', 'cherry'];
  for (const fruit of fruits) {
    console.log('for..of fruit =', fruit);
  }
}

function forInExample() {
  const person = { name: 'Ada', age: 30 };
  for (const key in person) {
    // key is the property name (string)
    console.log(`for..in key=${key}, value=${(person as any)[key]}`);
  }
}

function iterateWithIndices() {
  const letters = ['a', 'b', 'c'];
  // Use forEach with index to avoid needing newer lib definitions
  letters.forEach((value, index) => {
    console.log('forEach index=', index, 'value=', value);
  });
}

export function runForExamples(): void {
  console.log('--- runForExamples ---');
  basicFor();
  forOfExample();
  forInExample();
  iterateWithIndices();
}

// Run when executed directly (useful when running with ts-node or after compilation)
runForExamples();
