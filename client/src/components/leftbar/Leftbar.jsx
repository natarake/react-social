import "./leftbar.css";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";
import {Users} from "../../dummyData"
import CloseFriend from "../closeFriend/CloseFriend";

export default function Leftbar() {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <ul className="leftbarList">
          {/* leftbarList 1 */}
          <li className="leftbarListItem">
            <RssFeedIcon className="leftbarIcon" />
            <span className="leftbarListItemText">Feed</span>
          </li>
          {/* leftbarList 2 */}
          <li className="leftbarListItem">
            <ChatIcon className="leftbarIcon" />
            <span className="leftbarListItemText">Chats</span>
          </li>
          {/* leftbarList 3 */}
          <li className="leftbarListItem">
            <PlayCircleIcon className="leftbarIcon" />
            <span className="leftbarListItemText">Videos</span>
          </li>
          {/* leftbarList 4 */}
          <li className="leftbarListItem">
            <GroupIcon className="leftbarIcon" />
            <span className="leftbarListItemText">Groups</span>
          </li>
          {/* leftbarList 5 */}
          <li className="leftbarListItem">
            <BookmarkIcon className="leftbarIcon" />
            <span className="leftbarListItemText">Bookmarks</span>
          </li>
          {/* leftbarList 6 */}
          <li className="leftbarListItem">
            <HelpOutlineIcon className="leftbarIcon" />
            <span className="leftbarListItemText">Questions</span>
          </li>
          {/* leftbarList 7 */}
          <li className="leftbarListItem">
            <WorkOutlineIcon className="leftbarIcon" />
            <span className="leftbarListItemText">Jobs</span>
          </li>
          {/* leftbarList 8 */}
          <li className="leftbarListItem">
            <EventIcon className="leftbarIcon" />
            <span className="leftbarListItemText">Events</span>
          </li>
          {/* leftbarList 9 */}
          <li className="leftbarListItem">
            <SchoolIcon className="leftbarIcon" />
            <span className="leftbarListItemText">Courses</span>
          </li>
        </ul>
        <button className="leftbarButton">Show More</button>
        <hr className="leftbarHr" />
        <ul className="leftbarFriendList">
        {/* Friend 1 */}
          {Users.map(user => (
            <CloseFriend key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
}
