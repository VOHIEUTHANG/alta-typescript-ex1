import { useReducer } from "react";

type action_type = "increment" | "decrement" | "reset";
type state_type = { count: number };
type actions_type = { type: action_type; payload?: number };

const initialState: state_type = { count: 0 };

const reducer = (state: state_type, action: actions_type) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + (action.payload || 0) };
    case "decrement":
      return { count: state.count - (action.payload || 0) };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};

const Couter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "increment", payload: 10 });
        }}
      >
        Increment 10
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", payload: 10 });
        }}
      >
        Decrement 10
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Couter;
