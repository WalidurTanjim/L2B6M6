"use strict";
// // typeof: type operator
// type RichPeopleVehicle = {
//     car: string;
//     bike: string;
//     cng: string;
// }
Object.defineProperty(exports, "__esModule", { value: true });
const myUser = {
    name: "Walidur Tanjim",
    age: 25,
    address: {
        city: "Dhaka"
    }
};
const myProduct = {
    brand: "ASUS",
    model: "TUF Gaming A15",
    price: 94000
};
const myStudent = {
    name: "Walidur Tanjim",
    class: 10,
    roll: 15
};
// get value of property from object
const getValueOfPropertyFromObject = (obj, key) => {
    return obj[key];
};
const result1 = getValueOfPropertyFromObject(myUser, "address");
console.log(result1);
const result2 = getValueOfPropertyFromObject(myProduct, "brand");
console.log(result2);
const result3 = getValueOfPropertyFromObject(myStudent, "name");
console.log(result3);
