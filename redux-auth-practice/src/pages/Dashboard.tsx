import {
  useAppDispatch,
  useAppSelector,
} from "../app/hooks";

import {
  increment,
  decrement,
  reset,
} from "../features/counter/counterSlice";

function Dashboard() {
  const user = useAppSelector(
    (state) => state.auth.user
  );

  const count = useAppSelector(
    (state) => state.counter.value
  );

  const dispatch = useAppDispatch();

  return (
    <div className="page">
      <h1>Dashboard</h1>

      <h2>
        Welcome, {user?.name}
      </h2>

      <p>
        Email: {user?.email}
      </p>

      <hr />

      <h2>Redux Counter</h2>

      <h3>{count}</h3>

      <button
        onClick={() =>
          dispatch(increment())
        }
      >
        +
      </button>

      <button
        onClick={() =>
          dispatch(decrement())
        }
      >
        -
      </button>

      <button
        onClick={() =>
          dispatch(reset())
        }
      >
        Reset
      </button>
    </div>
  );
}

export default Dashboard;