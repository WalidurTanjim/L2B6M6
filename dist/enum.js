"use strict";
// enum: define set of fixed string leteral
Object.defineProperty(exports, "__esModule", { value: true });
// type UserRoles = "Admin" | "Editor" | "Viewer";
// const canEdit = (role: UserRoles): boolean => {
//     if(role === "Admin" || role === "Editor"){
//         return true
//     }else return false
// }
// const isEditPermissable = canEdit("Viewer");
// console.log(isEditPermissable);
var UserRoles;
(function (UserRoles) {
    UserRoles["Admin"] = "Admin";
    UserRoles["Editor"] = "Editor";
    UserRoles["Viewer"] = "Viewer";
})(UserRoles || (UserRoles = {}));
;
const canEdit = (role) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    }
    else
        return false;
};
const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);
