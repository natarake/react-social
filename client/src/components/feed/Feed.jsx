import Shared from "../../components/share/Shared";
import "./feed.css";
import Post from "../../components/singlepost/Post";
import { Posts } from "../../dummyData";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Shared />
        {Posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}