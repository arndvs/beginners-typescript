   interface User {
    id: number;
    firstName: string;
    lastName: string;
    role: Role;

  }

  type Role = "admin" | "user" | SuperAdmin;

  type SuperAdmin = 'super-admin'

export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  role: "super-admin"
};
