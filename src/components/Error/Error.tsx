import { useContext } from "react";
import { SearchContext } from "../../pages/Main/Main";
import styles from "./Error.module.css";

export function Error() {
  const { error } = useContext(SearchContext);

  return <p className={styles.error}>{error}</p>;
}
