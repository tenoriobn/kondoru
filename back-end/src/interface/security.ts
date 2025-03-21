export interface RegisterAclData {
  roles: string[];
  permissions: string[];
  userId?: string;
}

export interface RegisterPermissionsRolesData {
  roleId: string;
  permissions: string[];
}