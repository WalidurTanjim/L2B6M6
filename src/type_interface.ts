// type alias
type UserInfo = {
    name: string;
    age: number;
};

type UserRole = {
    role: 'admin' | 'user';
}

type UserWithRole = UserInfo & UserRole;

const newUser: UserWithRole = {
    name: "Walidur Tanjim",
    age: 25,
    role: "admin"
}


// type interface
interface NewUserInfo {
    name: string;
    age: number;
}

interface NewUserRole extends NewUserInfo {
    role: 'admin' | 'moderator' | 'user';
}

const NewUserWithRole: NewUserRole = {
    name: "Walidur Rahman Tanjim",
    age: 25,
    role: "moderator"
}


