"use strict";
// Function calles "basic building blocks";
// Generics with function
Object.defineProperty(exports, "__esModule", { value: true });
// const createStringArray = (value: string) => [value];
// const createNumberArray = (value: number) => [value];
// const createObjectArray = (value: UserType) => [value];
// const stringArray = createStringArray('Appli');
// const numberArray = createNumberArray(25);
// const objectArray = createObjectArray({
//     name: "Walidur Tanjim",
//     age: 25,
//     isMarried: false
// });
// create array with generics via function
const createArrayWithGenerics = (value) => [value];
// console.log(createArrayWithGenerics<string>('Tanjim'));
// console.log(createArrayWithGenerics<number>(25));
// console.log(createArrayWithGenerics<UserType>({name: "Walidur Tanjim", age: 25, isMarried: false}));
// tuple
const createTupleWithGenerics = (value1, value2, value3) => [value1, value2, value3];
const tupleResult = createTupleWithGenerics("Walidur Tanjim", 25, { name: "Walidur Tanjim", age: 25, isMarried: false });
const enrollToCourse = (studentInfo) => {
    return {
        course: "Next Level Web Development",
        ...studentInfo
    };
};
const student1 = {
    id: 1,
    name: "Walidur Tanjim",
    age: 25,
    hasComputer: true,
    hasWifi: true
};
const student2 = {
    id: 2,
    name: "Walidur Tanjim",
    age: 25,
    hasComputer: true,
    isStudent2: true
};
const result = enrollToCourse(student2);
console.log(result);
