export type userType = "member" | "admin" | "staff" | "";

export default interface IUser {
  name: string;
  id: number;
  type: userType;
  email: string;
}
