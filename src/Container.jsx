import { useReducer } from "react";
import App from "./App";
import PostReducer from "./store/PostReducer";
import MyContext from "./store/MyContext";

const Container = () => {
  const initialReducerData = {
    text: "hello text",
    posts: [
      // {
      //   id: Date.now(),
      //   val: "Post1",
      //   text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum tenetur ut.",
      // },
    ],
  };
  const [posts, dispatch] = useReducer(PostReducer, initialReducerData);
  return (
    <>
      <MyContext.Provider value={{ posts, dispatch }}>
        <App />
      </MyContext.Provider>
    </>
  );
};

export default Container;
