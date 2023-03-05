import "./closeFriend.css";

export default function closeFriend({user}) {
  return (
    <li className="leftbarFriend">
      <img
        src={user.profilePicture}
        alt=""
        className="leftbarFriendImg"
      ></img>
      <span className="leftbarFriendName">{user.username}</span>
    </li>
  );
}
