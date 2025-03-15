export interface IUser {
  id:string
  _id: string;
  username: string;
  password: string;
  status: boolean;
  workerName:string
  role:ERoles
}

export enum ERoles{
  USER="user",
  ADMIN="admin",
  OWNER="owner"
}
