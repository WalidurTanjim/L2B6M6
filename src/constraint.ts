// Constraint: Strict rules deya
interface StudentType {
    id: number;
    name: string;
    email: string;
}

const enrollStudentToCourse = <T extends StudentType>(studentInfo: T): T & { course: string } => {
    return {
        course: "Next Level Web Development",
        ...studentInfo
    }
}

const student1 = {
    id: 1,
    name: "Walidur Tanjim",
    email: "walidur.tanjim@gmail.com",
    hasComputer: true,
    hasWifi: true
}
const resultStudent1 = enrollStudentToCourse(student1);
console.log(resultStudent1);