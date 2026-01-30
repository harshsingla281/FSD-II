import { useState } from "react";

function LocalCounter({ label }) {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-box">
      <h3>Local State Counter {label}</h3>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default LocalCounter;
