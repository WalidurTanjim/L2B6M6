"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserRole = {
    ADMIN: "Admin",
    EDITOR: "Editor",
    VIEWER: "Viewer"
};
const canEdit = (role) => {
    if (role === "ADMIN" || role === "EDITOR") {
        return true;
    }
    else
        return false;
};
const isEditPermissable = canEdit("ADMIN");
console.log(isEditPermissable);
