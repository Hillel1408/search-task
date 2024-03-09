import { useEffect, useState, createContext } from "react";
import { SearchForm, SearchResults, Error } from "./components";
import { searchUser } from "./services/api";
import { IUser } from "./types/global";

interface ISearchContext {
  users: IUser[];
  search: string;
  setSearch: (arg: string) => void;
  loading: boolean;
  error: string;
}

export const SearchContext = createContext<ISearchContext>({
  users: [],
  search: "",
  setSearch: () => {},
  loading: false,
  error: "",
});

export default function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const value = { users, search, setSearch, loading, error };

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const users = await searchUser(search);
        setUsers(users.users);
      } catch (error) {
        setError(String(error));
      } finally {
        setLoading(false);
      }
    })();
  }, [search]);

  return (
    <SearchContext.Provider value={value}>
      <SearchForm />
      {error && <Error />}
      <SearchResults />
    </SearchContext.Provider>
  );
}
