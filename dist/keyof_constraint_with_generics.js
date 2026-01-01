"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myVehicle = "car";
const user = {
    id: 1,
    name: "Walidur Tanjim",
    email: "walidur.tanjim@gamil.com",
    address: {
        city: "Dhaka"
    }
};
// const myId = user?.id;
// const myId = user["id"];
const getPropertyFromObj = (obj, key) => {
    return obj[key];
};
const result = getPropertyFromObj(user, "address");
console.log(result);
