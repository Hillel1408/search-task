import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../App";
import { Spinner } from "../../components";
import "./styles.css";

export function SearchForm() {
  const [value, setValue] = useState("");

  const { setSearch, loading } = useContext(SearchContext);

  const handleKey = (e: { key: string }) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    setSearch(value);
  };

  useEffect(() => {
    value === "" && handleSubmit();
  }, [value]);

  return (
    <div className="searchForm">
      <input
        type="search"
        value={value}
        onKeyDown={handleKey}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? <Spinner /> : "Найти"}
      </button>
    </div>
  );
}
