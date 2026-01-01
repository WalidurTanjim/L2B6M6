// Type Alias
type IsAdmin = boolean;
const isAdmin: IsAdmin = false;

type User = {
    name: string;
    age: number;
}
type Role = {
    role: 'admin' | 'user';
}
type UserWithRole = User & Role;

const user1: User = {
    name: "Walidur Tanjim",
    age: 25
}
const user2: User = {
    name: "Walidur Tanjim",
    age: 24
}
const user3: UserWithRole = {
    name: "Walidur Tanjim",
    age: 25, 
    role: "admin"
}









// Type Interface: It will work with object type data [array, object, function]
interface UserInterface {
    name: string;
    age: number;
}
interface UserWithRoleInterface extends UserInterface{
    role: "admin" | "user";
}

const userInterface1: UserInterface = {
    name: "Walidur Tanjim",
    age: 25
}
const UserInterface2: UserWithRoleInterface = {
    name: "Walidur Tanjim",
    age: 25,
    role: "admin"
}


// function with type alias & type interface
type AddFuncAlias = (value1: number, value2: number) => number;
interface AddFuncInterface {
    (value1: number, value2: number) : number;
};
const addFuncInterface: AddFuncInterface = (value1, value2) => value1 + value2;


// array with type alias & type interface
type FriendsArrayAlias = string[];
interface FriendsArrayInterface {
    [index: number]: string;
}
const friendsArrayInterface: FriendsArrayInterface = ['A', 'B', 'C', 'D', 'E'];