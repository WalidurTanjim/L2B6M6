"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Type Assertion / Type Narrowing
let anything;
anything = 25;
// (anything as number).toFixed(2);
anything = "Walidur Tanjim";
// (anything as string).charAt(1);
// KG to GM convertor function
const kgToGMConvertor = (input) => {
    if (typeof input === "number") {
        return input * 1000;
    }
    else if (typeof input === "string") {
        const [value] = input.split(' ');
        return `Converted output is: ${Number(value) * 1000}`;
    }
};
const result1 = kgToGMConvertor(2);
// console.log(result1.toFixed(1));
// console.log(result1);
const result2 = kgToGMConvertor('5.3 KG');
try {
}
catch (err) {
    console.error(err?.message);
}
