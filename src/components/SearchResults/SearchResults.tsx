import { useContext, useEffect, useRef, useState } from "react";
import { SearchContext } from "../../App";
import { UserCard } from "../../components";

import "./style.css";

export function SearchResults() {
  const [page, setPage] = useState(0);

  const { users } = useContext(SearchContext);

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
    <div className="usersList">
      {users.slice(0, page * 9).map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      <div ref={observerTarget}></div>
    </div>
  );
}
