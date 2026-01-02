// Function calles "basic building blocks";
// Generics with function

interface UserType {
    name: string;
    age: number;
    isMarried: boolean;
}

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
const createArrayWithGenerics = <T>(value: T) => [value];
// console.log(createArrayWithGenerics<string>('Tanjim'));
// console.log(createArrayWithGenerics<number>(25));
// console.log(createArrayWithGenerics<UserType>({name: "Walidur Tanjim", age: 25, isMarried: false}));





// tuple
const createTupleWithGenerics = <X, Y, Z>(value1: X, value2: Y, value3: Z) => [value1, value2, value3];
const tupleResult = createTupleWithGenerics<string, number, UserType>("Walidur Tanjim", 25, {name: "Walidur Tanjim", age: 25, isMarried: false});
// console.log(tupleResult);





// 
interface StudentType {
    id: number;
    name: string;
    age: number;
    hasComputer: boolean;
    hasWifi?: boolean;
}

const enrollToCourse = <T extends StudentType>(studentInfo: T): T & { course: string, duration: string } => {
    return {
        course: "Next Level Web Development",
        duration: "6 Months",
        ...studentInfo
    }
};


const student1: StudentType = {
    id: 1,
    name: "Walidur Tanjim",
    age: 25,
    hasComputer: true,
    hasWifi: true
}
const student2 = {
    id: 2,
    name: "Walidur Tanjim",
    age: 25,
    hasComputer: true,
    isStudent2: true
}

const result = enrollToCourse(student2);
console.log(result);