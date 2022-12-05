import React from "react";

const ChildToParent = ({ data, fetchData }) => {
  const data2 = "I am from child component";
  fetchData(data2);

  return (
    <div>
      <h1>I am child component</h1>
      <p>{data}</p>
    </div>
  );
};

export default ChildToParent;
