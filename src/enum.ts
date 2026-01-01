// enum: define set of fixed string leteral

// type UserRoles = "Admin" | "Editor" | "Viewer";
// const canEdit = (role: UserRoles): boolean => {
//     if(role === "Admin" || role === "Editor"){
//         return true
//     }else return false
// }

// const isEditPermissable = canEdit("Viewer");
// console.log(isEditPermissable);


enum UserRoles {
    Admin = "Admin",
    Editor = "Editor",
    Viewer = "Viewer"
};

const canEdit = (role: UserRoles) => {
    if(role === UserRoles.Admin || role === UserRoles.Editor){
        return true;
    }else return false;
}

const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);