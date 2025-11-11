//Welcome
"use strict";
// Datatype/Control_Flow/for.ts
// Simple examples of different `for` loop styles in TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
exports.runForExamples = runForExamples;
function basicFor() {
    var nums = [1, 2, 3, 4, 5];
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    console.log('basicFor sum =', sum);
}
function forOfExample() {
    var fruits = ['apple', 'banana', 'cherry'];
    for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
        var fruit = fruits_1[_i];
        console.log('for..of fruit =', fruit);
    }
}
function forInExample() {
    var person = { name: 'Ada', age: 30 };
    for (var key in person) {
        // key is the property name (string)
        console.log("for..in key=".concat(key, ", value=").concat(person[key]));
    }
}
function iterateWithIndices() {
    var letters = ['a', 'b', 'c'];
    // Use forEach with index to avoid needing newer lib definitions
    letters.forEach(function (value, index) {
        console.log('forEach index=', index, 'value=', value);
    });
}
function runForExamples() {
    console.log('--- runForExamples ---');
    basicFor();
    forOfExample();
    forInExample();
    iterateWithIndices();
}
// Run when executed directly (useful when running with ts-node or after compilation)
runForExamples();
