"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enrollStudentToCourse = (studentInfo) => {
    return {
        course: "Next Level Web Development",
        ...studentInfo
    };
};
const student1 = {
    id: 1,
    name: "Walidur Tanjim",
    email: "walidur.tanjim@gmail.com",
    hasComputer: true,
    hasWifi: true
};
const resultStudent1 = enrollStudentToCourse(student1);
console.log(resultStudent1);
