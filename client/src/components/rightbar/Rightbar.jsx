import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Glenn Ladrido</b> and <b>3 other friends</b>have a birthday today
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {/* friend 1 */}
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Olongapo City</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Olongapo City</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          {/* person 1 */}
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="assets/person/1.jpeg"
              alt=""
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          {/* person 2 */}
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="assets/person/2.jpeg"
              alt=""
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          {/* person 3 */}
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="assets/person/3.jpeg"
              alt=""
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          {/* person 4 */}
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="assets/person/4.jpeg"
              alt=""
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          {/* person 5 */}
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="assets/person/5.jpeg"
              alt=""
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          {/* person 6 */}
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="assets/person/6.jpeg"
              alt=""
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
         {profile ? <ProfileRightBar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
