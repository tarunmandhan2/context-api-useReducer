const PostCard = ({ post, dispatch }) => {
  const { id, val, text } = post;
  //   console.log("post--", post);

  const handleCloseButton = (id) => {
    console.log("id-----", id);
    dispatch({ type: "remove_Post", payload: id });
  };
  return (
    <>
      <span className="outer">
        <button
          type="button"
          className="closeButton"
          onClick={() => handleCloseButton(id)}
        >
          X
        </button>
        <h4>ID: {id}</h4>
        <h4>{val}</h4>
        <p>{text}</p>
        <button type="button" onClick={() => handleCloseButton(id)}>
          Remove Post
        </button>
      </span>
    </>
  );
};

export default PostCard;
