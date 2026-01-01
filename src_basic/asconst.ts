const UserRole = {
    ADMIN: "Admin",
    EDITOR: "Editor",
    VIEWER: "Viewer"
} as const;

const canEdit = (role: keyof typeof UserRole): boolean => {
    if(role === "ADMIN" || role === "EDITOR"){
        return true;
    }else return false;
}

const isEditPermissable = canEdit("ADMIN");
console.log(isEditPermissable);