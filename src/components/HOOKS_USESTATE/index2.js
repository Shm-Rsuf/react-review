import React, { useState } from "react";

export default function HOOKS_USESTATE2() {
  const [count, setData] = useState(0);

  const decrementHandler = () => {
    setData(count - 1);
  };

  const incrementHandler = () => {
    setData(count + 2);
  };

  return (
    <div>
      <h3>counter : {count}</h3>
      <button
        className="btn"
        onClick={decrementHandler}
        disabled={count === 0 ? true : false}
      >
        -
      </button>

      <button className="btn" onClick={incrementHandler}>
        +
      </button>
    </div>
  );
}
