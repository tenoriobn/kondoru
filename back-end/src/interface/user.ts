export interface UserData {
  name: string;
  email: string;
  date_of_birth: string;
  phone: string;
  id?: string;
}

export interface UserRegisterData extends UserData {
  password: string;
}