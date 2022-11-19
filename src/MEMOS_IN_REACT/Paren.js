import React, { useState } from "react";
import Child from "./Child";

function Paren() {
  const [parentCount, setParentCount] = useState(0);
  const [childCount, setChildtCount] = useState(0);

  const changeParentCount = () => {
    setParentCount(parentCount + 1);
  };

  const changeChildCount = () => {
    setChildtCount(childCount - 1);
  };

  return (
    <div>
      <h2>The parent count is : {parentCount}</h2>
      <Child childCount={childCount} />

      <button className="btn" onClick={changeParentCount}>
        +
      </button>

      <button className="btn" onClick={changeChildCount}>
        -
      </button>
    </div>
  );
}
export default Paren;
