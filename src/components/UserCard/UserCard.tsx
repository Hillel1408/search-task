import { IUser } from "../../types/global";
import "./style.css";

export function UserCard({ user }: { user: IUser }) {
  return (
    <div className="userCard">
      <img
        className="userPic"
        src={user.image}
        width="80px"
        height="80px"
        alt=""
      />
      <div className="userInfo">
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
