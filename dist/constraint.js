"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enrollStudentToCourse = (studentInfo) => {
    return {
        course: "Next Level",
        ...studentInfo
    };
};
const student1 = {
    id: 1,
    name: "Walidur Tanjim",
    email: "walidurtanjim.1@gmail.com"
};
const reuslt = enrollStudentToCourse(student1);
console.log(reuslt);
