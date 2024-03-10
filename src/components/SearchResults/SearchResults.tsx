import { useContext, useEffect, useRef, useState } from "react";
import { UserCard } from "../../components";
import { SearchContext } from "../../pages/Main/Main";
import styles from "./SearchResults.module.css";

export function SearchResults() {
  const [page, setPage] = useState(0);

  const { users, search } = useContext(SearchContext);

  const observerTarget = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget]);

  return (
    <div className={styles.usersList}>
      {search !== "" && users.length === 0
        ? "Ничего не найдено"
        : users
            .slice(0, page * 9)
            .map((user) => <UserCard key={user.id} user={user} />)}
      <div ref={observerTarget}></div>
    </div>
  );
}
