type UserType = {
    id: number;
    name: string;
}

// Generic function
// const createStringArray = (value: string) => [value];

// const createNumberArray = (value: number) => [value];

// const createUserObjArray = (value: UserType) => {
//     return [value];
// }

const createArrayWithGeneric = <T>(value: T): T[] => [value];

// call function
// const stringArray = createStringArray('Apple');
// const numberArray = createNumberArray(222);
// const userObjArray = createUserObjArray({
//     id: 1,
//     name: "Walidur Tanjim"
// })

const stringArray = createArrayWithGeneric<string>('Orange');
const numberArray = createArrayWithGeneric<number>(555);
const userObjArray = createArrayWithGeneric<UserType>({
    id: 1,
    name: "Walidur Tanjim"
}) 



// tuple
const createArrayWithTuple = (param1: string, param2: string) => [param1, param2];
const createArrayTupleWithGeneric = <X, Y>(param1: X, params2: Y) => [param1, params2];

createArrayTupleWithGeneric<string, number>("Walidur Tanjim", 25);
createArrayTupleWithGeneric<string, boolean>("Walidur Tanjim", false);




// 
type StudentType = {
    id: number;
    name: string;
}
const student1 = {
    id: 123,
    name: "Walidur Tanjim",
    hasPen: true
}

const student2 = {
    id: 123,
    name: "Tanjim",
    hasCar: true,
    isMarried: false,
    isStudent: true
}

const student3: StudentType = {
    id: 123,
    name: "Walidur Tanjim"
}

const addStudentToCourse = <T extends StudentType>( studentInfo: T ): T & { course: string } => {
    return {
        course: "Next Level",
        ...studentInfo
    }
}

const result = addStudentToCourse(student3);
console.log(result);