// // type alias
// type UserInfo = {
//     name: string;
//     age: number;
// };

// type UserRole = {
//     role: 'admin' | 'user';
// }

// type UserWithRole = UserInfo & UserRole;

// const newUser: UserWithRole = {
//     name: "Walidur Tanjim",
//     age: 25,
//     role: "admin"
// }


// // type interface
// interface NewUserInfo {
//     name: string;
//     age: number;
// }

// interface NewUserRole extends NewUserInfo {
//     role: 'admin' | 'moderator' | 'user';
// }

// const NewUserWithRole: NewUserRole = {
//     name: "Walidur Rahman Tanjim",
//     age: 25,
//     role: "moderator"
// }


// // function
// type AddFunction = (num1: number, num2: number) => number;

// interface AddFunctionInterface {
//     (num1: number, num2: number): number;
// }

// const addFunction: AddFunctionInterface = (num1, num2) => {
//     return num1 * num2;
// };


// // array
// type FriendsArray = string[];

// interface FriendsArrayInterface {
//     [index: number]: string;
// }

// const friendsArray: FriendsArrayInterface = ['A', 'B', 'C', 'D', 'E'];






// type interface
interface NewUserInfo {
    name: string;
    age: number;
    isStudent: boolean;
}

interface NewUserWithRole extends NewUserInfo {
    role: 'admin' | 'moderator' | 'user';
}

const SingleUser: NewUserWithRole = {
    name: 'Walidur Tanjim',
    age: 25,
    isStudent: true,
    role: "user"
}


// interface with function
type AddFunctionType = (num1: number, num2: number) => number;

interface AddFunctionInterface {
    (num1: number, num2: number): number;
}

const addFunction: AddFunctionInterface = (num1, num2) => {
    return num1 * num2;
}


// interface with array
type StringArrayType = string[];

// index signature
interface StringArrayInterface {
    [index: number]: string;
}

const stringArray: StringArrayInterface = ['A', 'B', 'C', 'D', 'E'];

