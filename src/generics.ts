// Generics
type GenericsArray<T> = Array<T>;

// const stringArray: string[] = ['A', 'B', 'C', 'D', 'E'];
// const stringArray: Array<string> = ['A', 'B', 'C', 'D', 'E'];
// const stringArray: GenericsArray<string> = ['A', 'B', 'C', 'D', 'E'];

// const numberArray: number[] = [1, 2, 3, 4, 5];
// const numberArray: Array<number> = [1, 2, 3, 4, 5];
// const numberArray: GenericsArray<number> = [1, 2, 3, 4, 5];

// const booleanArray: boolean[] = [true, false, false, true, true];
// const booleanArray: Array<boolean> = [true, false, false, true, true];
// const booleanArray: GenericsArray<boolean> = [true, false, false, true, true];





// array of objects
interface FunctionInterface {
    brand: string;
    model: string;
    price: number;
};

const functionArray: GenericsArray<FunctionInterface> = [
    { brand: 'ASUS', model: 'TUF Gaming A15 FA506N', price: 94000 },
    { brand: 'HP', model: '245 G7', price: 42000 }
]
// console.log(functionArray);




// tuple with generics
type Coordinates<X, Y, Z> = [X, Y, Z];
const coordinates1: Coordinates<string, number, boolean> = ["Walidur Tanjim", 25, false];
const coordinates2: Coordinates<string, string, number> = ['Walidur Tanjim', 'BackEnd Developer', 100000];
const coordinates3: Coordinates<string, number, FunctionInterface> = ["Walidur Tanjim", 25, { brand: "ASUS", model: "TUF Gaming A15 FA506N", price: 94000 }];
console.log(coordinates3);