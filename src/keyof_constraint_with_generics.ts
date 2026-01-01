// keyof: type operator
type RichPeopleVehicles = {
    car: string;
    bike: string;
    cng: string;
};

type MyVehicles1 = "bike" | "car" | "cng";
type MyVehicles2 = keyof RichPeopleVehicles;

const myVehicle: MyVehicles2 = "car";





// keyof constraint
type UserType = {
    id: number;
    name: string;
    email: string;
    address: {
        city: string;
    }
};

const user: UserType = {
    id: 1,
    name: "Walidur Tanjim",
    email: "walidur.tanjim@gamil.com",
    address: {
        city: "Dhaka"
    }
}

// const myId = user?.id;
// const myId = user["id"];



const getPropertyFromObj = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key];
}
const result = getPropertyFromObj(user, "address");
console.log(result);
