// // typeof: type operator
// type RichPeopleVehicle = {
//     car: string;
//     bike: string;
//     cng: string;
// }

// type MyVehicle1 = "bile" | "car" | "cng";
// type MyVehicle2 = keyof RichPeopleVehicle;

// const myVehicle: MyVehicle2 = "car";


// // keyof constraints:
// // ==================

// type UserType = {
//     id: number;
//     name: string;
//     address: {
//         city: string;
//     }
// }

// const user: UserType = {
//     id: 111,
//     name: "Walid",
//     address: {
//         city: "Dhaka"
//     }
// };

// // const myId = user?.id;
// // const myId = user['id'];

// // const getPropertyFromObj = (obj: UserType, key: keyof UserType) => {
// //     return obj[key];
// // }

// const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
//     return obj[key];
// }

// const result = getPropertyFromObj(user, "address")
// console.log(result);



// type ProductType = {
//     brand: string;
//     model: string;
//     price: number;
// }

// const product: ProductType = {
//     brand: "ASUS",
//     model: "TUF Gaming A15",
//     price: 94000
// }

// const result2 = getPropertyFromObj(product, "price")
// console.log(result2);




// ==================================================================


type RichPeopleVehicle = {
    car: string;
    bike: string;
    cng: string;
}
type MyVehicle = keyof RichPeopleVehicle;

// user type
type UserType = {
    name: string;
    age: number;
    address: {
        city: string;
    }
};

const myUser: UserType = {
    name: "Walidur Tanjim",
    age: 25,
    address: {
        city: "Dhaka"
    }
};


// product type
type ProductType = {
    brand: string;
    model: string;
    price: number;
}

const myProduct: ProductType = {
    brand: "ASUS",
    model: "TUF Gaming A15",
    price: 94000
};


// student type
type StudentType = {
    name: string;
    class: number;
    roll: number;
}

const myStudent: StudentType = {
    name: "Walidur Tanjim",
    class: 10,
    roll: 15
}

// get value of property from object
const getValueOfPropertyFromObject = <T, K extends keyof T>( obj: T, key: K ): T[K] => {
    return obj[key];
}

const result1 = getValueOfPropertyFromObject(myUser, "address");
console.log(result1);

const result2 = getValueOfPropertyFromObject(myProduct, "brand");
console.log(result2);

const result3 = getValueOfPropertyFromObject(myStudent, "name");
console.log(result3);