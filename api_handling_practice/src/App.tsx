import { useState } from "react";
import "./App.css";

import PromiseIntro from "./components/Promise";
import FetchThenCatch from "./components/FetchThenCatch";
import ChainedCalls from "./components/ChainedCalls";
import AsyncAwaitDemo from "./components/AsyncAwait";
import ErrorHandling from "./components/ErrorHandling";
import LoadingIndicator from "./components/LoadingIndicator";
import CustomFetchHook from "./components/CustomFetchHook";
import SubmitNewPost from "./components/SubmitNewPost";
import CustomSubmitHook from "./components/CustomSubmitHook";
import EditPost from "./components/EditPost";
import RemovePost from "./components/RemovePost";
import PostManager from "./components/PostManager";

const screens = [
  ["Promise ", PromiseIntro],
  ["Then / Catch", FetchThenCatch],
  ["Chained Calls", ChainedCalls],
  ["Async / Await", AsyncAwaitDemo],
  ["Error Handling", ErrorHandling],
  ["Loading Indicator", LoadingIndicator],
  ["Custom Fetch Hook", CustomFetchHook],
  ["Submit New Post", SubmitNewPost],
  ["Custom Submit Hook", CustomSubmitHook],
  ["Edit Post", EditPost],
  ["Remove Post", RemovePost],
  ["Post Manager", PostManager],
] as const;

export default function App() {
  const [index, setIndex] = useState(0);
  const Screen = screens[index][1];

  return (
    <div className="app">
      <aside className="sidebar">
        <h1>API Practice</h1>
        {screens.map(([label], i) => (
          <button
            key={label}
            className={i === index ? "nav-item active" : "nav-item"}
            onClick={() => setIndex(i)}
          >
            {label}
          </button>
        ))}
      </aside>
      <main className="content">
        <Screen />
      </main>
    </div>
  );
}
