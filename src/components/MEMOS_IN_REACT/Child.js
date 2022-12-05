import React from "react";

function Child({ childCount }) {
  console.log("child component is being re-rendering");
  return (
    <div>
      <h2>The child count is : {childCount}</h2>
    </div>
  );
}

export default React.memo(Child);
