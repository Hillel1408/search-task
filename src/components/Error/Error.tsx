import { useContext } from "react";
import { SearchContext } from "../../App";
import "./styles.css";

export function Error() {
  const { error } = useContext(SearchContext);

  return <p className="error">{error}</p>;
}
