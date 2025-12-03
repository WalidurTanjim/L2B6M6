type GenericsArray<T> = Array<T>;


// const friendsArray: string[] = ['a', 'b', 'c', 'd', 'e'];
// const friendsArray: Array<string> = ['a', 'b', 'c', 'd', 'e'];
const friendsArray: GenericsArray<string> = ['a', 'b', 'c', 'd', 'e'];

// const booleanArray: boolean[] = [true, true, false, true, false, false];
// const booleanArray: Array<boolean> = [true, true, false, true, false, false];
const booleanArray: GenericsArray<boolean> = [true, true, false, true, false, false];

// const numberArray: number[] = [1, 2, 3, 4, 5];
// const numberArray: Array<number> = [1, 2, 3, 4, 5];
const numberArray: GenericsArray<number> = [1, 2, 3, 4, 5];


// tuple generics
type Coordinates<W, X, Y, Z> = [W, X, Y, Z];

// const coordinates: [string, number, boolean, boolean] = ['A', 1, false, true];
const coordinates: Coordinates<string, number, boolean, boolean> = ['A', 1, false, false];





// array of objects generics
type UserObject = {
    name: string;
    age: number;
    isStudent: boolean;
}

type ArrayOfObjectsGenerics<T> = Array<T>;

const userList: ArrayOfObjectsGenerics<UserObject> = [
    { name: 'Walidur Tanjim', age: 25, isStudent: true },
    { name: 'Walidur', age: 26, isStudent: true },
    { name: 'Tanjim', age: 27, isStudent: true },
];