"use strict";
// as const assertion
// enum UserRoles {
//     Admin = "Admin",
//     Editor = "Editor",
//     Viewer = "Viewer"
// };
Object.defineProperty(exports, "__esModule", { value: true });
const UserRoles = {
    Admin: "Admin",
    Editor: "Editor",
    Viewer: "Viewer"
};
/*
    {
        readonly Admin: "Admin",
        readonly Editor: "Editor",
        readonly Viewer: "Viewer"
    }

    1: typeof operator [it works on the runtime]
    2: keyof operator

    const user = {
        id: 1,
        name: "Walidur Tanjim"
    };
    
    typeof user;

    // after "typeof user" typescript will make:
    type user = {
        id: number;
        name: string;
    }

=========================================================

    typeof UserRoles;

    type UserRoles = {
        Admin: "Admin";
        Editor: "Editor";
        Viewer: "Viewer"
    }

    keyof typeof UserRole ["Admin" | "Editor" | "Viewer" (string literal)]

*/
const canEdit = (role) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    }
    else
        return false;
};
const isEditPermissable = canEdit(UserRoles.Viewer);
console.log(isEditPermissable);
