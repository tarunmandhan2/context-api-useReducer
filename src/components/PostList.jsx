import { useContext } from "react";
import MyContext from "../store/MyContext";
import PostCard from "./PostCard";

const PostList = () => {
  const { posts, dispatch } = useContext(MyContext);
  console.log("postTop-----", posts);
  console.log("text-----", posts.text);
  const handleAddPost = () => {
    dispatch({
      type: "add_Post",
      payload: {
        id: Date.now(),
        val: "Post1",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum tenetur ut.",
      },
    });
  };
  return (
    <>
      <button onClick={handleAddPost}>Add Post</button>
      <h1>PostList</h1>
      {posts.posts &&
        posts.posts.map((post) => (
          <PostCard post={post} dispatch={dispatch} key={post.id} />
        ))}
    </>
  );
};
export default PostList;
