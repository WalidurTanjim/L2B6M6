"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generic function
// const createStringArray = (value: string) => [value];
// const createNumberArray = (value: number) => [value];
// const createUserObjArray = (value: UserType) => {
//     return [value];
// }
const createArrayWithGeneric = (value) => [value];
// call function
// const stringArray = createStringArray('Apple');
// const numberArray = createNumberArray(222);
// const userObjArray = createUserObjArray({
//     id: 1,
//     name: "Walidur Tanjim"
// })
const stringArray = createArrayWithGeneric('Orange');
const numberArray = createArrayWithGeneric(555);
const userObjArray = createArrayWithGeneric({
    id: 1,
    name: "Walidur Tanjim"
});
// tuple
const createArrayWithTuple = (param1, param2) => [param1, param2];
const createArrayTupleWithGeneric = (param1, params2) => [param1, params2];
createArrayTupleWithGeneric("Walidur Tanjim", 25);
createArrayTupleWithGeneric("Walidur Tanjim", false);
const student1 = {
    id: 123,
    name: "Walidur Tanjim",
    hasPen: true
};
const student2 = {
    id: 123,
    name: "Tanjim",
    hasCar: true,
    isMarried: false,
    isStudent: true
};
const student3 = {
    id: 123,
    name: "Walidur Tanjim"
};
const addStudentToCourse = (studentInfo) => {
    return {
        course: "Next Level",
        ...studentInfo
    };
};
const result = addStudentToCourse(student3);
console.log(result);
