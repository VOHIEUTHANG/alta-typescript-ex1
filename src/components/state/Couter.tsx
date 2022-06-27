import { useReducer } from "react";

type actionType = "increment" | "decrement" | "reset";
type stateType = { count: number };
type actionsType = { type: actionType; payload?: number };

const initialState: stateType = { count: 0 };

const reducer = (state: stateType, action: actionsType) => {
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
