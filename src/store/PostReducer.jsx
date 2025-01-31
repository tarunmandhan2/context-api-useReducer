const PostReducer = (state, action) => {
  const { posts } = state;
  // console.log(posts);
  console.log("state5-----", state);

  switch (action.type) {
    case "add_Post":
      return { ...state, posts: [...posts, action.payload] };
    case "remove_Post":
      const newPostList = posts.filter((post) => post.id !== action.payload);
      return { ...state, posts: newPostList };
    default:
      return state;
  }
};
export default PostReducer;

// {
//   ...data,
//   posts: [
//     ...posts,
//     {
//       id: Date.now(),
//       val: "Post1",
//       text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum tenetur ut.",
//     },
//   ],
// }
