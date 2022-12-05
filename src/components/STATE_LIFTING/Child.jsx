import React from "react";

const Child = ({ data, childData }) => {
  const clData = "I am from child component";
  childData(clData);
  return (
    <div>
      <h2>I am from child component</h2>
      <h1>{data}</h1>
    </div>
  );
};

export default Child;
