// Mapped Types

// map
const arrayOfNumbers: number[] = [1, 2, 3, 4, 5];
// const arrayOfString: string[] = ["1", "2", "3", "4", "5"];

const arrayOfStringUsingMap: string[] = arrayOfNumbers.map((num) => num.toString());
// console.log(arrayOfStringUsingMap);





// Mapped types
type AreaOfNumbers = {
    height: number;
    width: number;
}
type height = AreaOfNumbers["height"];

// type AreaOfString = {
//     height: string;
//     width: string;
// }

// type AreaOfBoolean = {
//     height: boolean;
//     width: boolean;
// }

type AreaOfString = {
    [key in keyof AreaOfNumbers]: string;
}

const myArea: AreaOfString = {
    height: '1',
    width: '2'
};


type Area<T> = {
    [key in keyof T]: T[key];
}

const area1: Area<AreaOfNumbers> = {
    height: 1,
    width: 2
}