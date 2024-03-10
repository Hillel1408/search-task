import { IUser } from "../../types/global";

export interface ISearchContext {
  users: IUser[];
  search: string;
  setSearch: (arg: string) => void;
  loading: boolean;
  error: string;
}
