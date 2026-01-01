// Constraint: strict rules deya
type StudentType = {
    id: number;
    name: string;
    email: string;
}

const enrollStudentToCourse = <T extends StudentType>(studentInfo: T): T & { course: string } => {
    return {
        course: "Next Level",
        ...studentInfo
    }
};

const student1: StudentType = {
    id: 1,
    name: "Walidur Tanjim",
    email: "walidurtanjim.1@gmail.com"
};

const result = enrollStudentToCourse(student1);
console.log(result);