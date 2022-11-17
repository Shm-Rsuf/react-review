import React, { useState } from "react";

export default function HOOKS_USESTATE3() {
  let [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount(count + 1);
  };

  const decrementHandler = () => {
    setCount(count - 1);
  };

  const resetHandler = () => {
    setCount((count = 0));
  };

  return (
    <div>
      <h3>count : {count}</h3>
      <button
        className="btn"
        onClick={incrementHandler}
        disabled={count === 5 ? true : false}
      >
        +
      </button>
      <button
        className="btn"
        onClick={decrementHandler}
        disabled={count === -5 ? true : false}
      >
        -
      </button>
      <button className="btn" onClick={resetHandler}>
        o
      </button>
    </div>
  );
}
