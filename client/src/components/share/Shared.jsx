import "./shared.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export default function Shared() {
  return (
    <div className="shared">
      <div className="sharedWrapper">
        <div className="sharedTop">
          <img
            src="assets/person/11.jpg"
            alt=""
            className="sharedProfileImg"
          />
          <input
            className="sharedInput"
            placeholder="What's on your mind?"
          ></input>
        </div>
        <hr className="sharedHr" />
        <div className="sharedBottom">
          <div className="sharedOptions">
            <div className="sharedOption">
              <PermMediaIcon htmlColor="green" className="sharedIcon"/>
              <span className="sharedOptionText">Photo/Video</span>
            </div>
            <div className="sharedOption">
              <LabelIcon htmlColor="blue" className="sharedIcon"/>
              <span className="sharedOptionText">Tag</span>
            </div>
            <div className="sharedOption">
              <RoomIcon htmlColor="tomato" className="sharedIcon"/>
              <span className="sharedOptionText">Location</span>
            </div>
            <div className="sharedOption">
              <EmojiEmotionsIcon htmlColor="gold" className="sharedIcon"/>
              <span className="sharedOptionText">Feeling/Activity</span>
            </div>
          </div>
          <button className="sharedButton">Share</button>
        </div>
      </div>
    </div>
  );
}
