interface IUser {
  id: number;
  image: string;
  firstName: string;
  lastName: string;
  address: { city: string };
  username: string;
  email: string;
}

export type { IUser };
