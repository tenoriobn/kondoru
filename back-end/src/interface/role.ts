export interface RoleData {
  id?: string;
  name: string;
  description: string;
}

export interface PermissionsRole {
  id: number;
  name: string;
  role_permissions: { name: string }[];
}

export interface UserRole {
  id: string;
  user_roles: { id: number; name: string; }[];
}