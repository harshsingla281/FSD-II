import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../store/slices/counterSlice";

function ReduxCounter({ label }) {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter-box">
      <h3>Redux Counter {label}</h3>
      <p>Count: {count}</p>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default ReduxCounter;
