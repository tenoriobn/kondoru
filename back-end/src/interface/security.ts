export interface RegisterRoleUserData {
  roleId: string;
  userId: string;
}

export interface RegisterPermissionsUserData {
  userId: string;
  permissionsId: string[];
}

export interface RegisterPermissionsRolesData {
  roleId: string;
  permissionsId: string[];
}