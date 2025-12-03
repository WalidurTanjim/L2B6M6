"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fullName = 'MD. Walidur Rahman Tanjim';
const age = 25;
const isStudent = true;
let anything;
anything = 25;
anything;
let myValue = 'Hello TypeScript';
const valueLength = myValue.length;
console.log(valueLength);
const kgToGMConvertor = (input) => {
    return typeof input === 'number' ? input * 1000 : typeof input === 'string' ? (() => {
        const [value] = input.split(' ');
        return `Converted to GM: ${Number(value) * 1000}`;
    })() : 'Enter any valid number';
};
const result1 = kgToGMConvertor(5);
const result2 = kgToGMConvertor('5 kg');
// try{
// }catch(err){
//     console.error((err as CustomError)?.message);
// }
