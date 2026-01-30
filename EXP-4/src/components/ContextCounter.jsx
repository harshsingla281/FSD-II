import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

function ContextCounter({ label }) {
  const { count, setCount } = useContext(CounterContext);

  return (
    <div className="counter-box">
      <h3>Context API Counter {label}</h3>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default ContextCounter;
