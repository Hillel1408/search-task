import styles from "./UserCard.module.css";
import { UserCardProps } from "./UserCard.props";

export function UserCard({ user }: UserCardProps) {
  return (
    <div className={styles.userCard}>
      <img
        className={styles.userPic}
        src={user.image}
        width="80px"
        height="80px"
        alt=""
      />
      <div className={styles.userInfo}>
        <div>
          {user.firstName} {user.lastName}
        </div>
        <div>city: {user.address.city}</div>
        <div>username: {user.username}</div>
        <div>email: {user.email}</div>
      </div>
    </div>
  );
}
