import PostList from "./components/PostList";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>16. Implement a Context API for Global State</h1>
      <h4>
        Create a global state using React's Context API with useReducer to
        manage the state of posts across the application.
      </h4>
      <PostList />
    </div>
  );
}
