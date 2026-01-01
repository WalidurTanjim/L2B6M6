// as const assertion
// enum UserRoles {
//     Admin = "Admin",
//     Editor = "Editor",
//     Viewer = "Viewer"
// };

const UserRoles = {
    Admin: "Admin",
    Editor: "Editor",
    Viewer: "Viewer"
} as const;

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

const canEdit = (role: keyof typeof UserRoles) => {
    if(role === UserRoles.Admin || role === UserRoles.Editor){
        return true;
    }else return false;
}

const isEditPermissable = canEdit(UserRoles.Viewer);
console.log(isEditPermissable);