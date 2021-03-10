import React from "react";

export const FunctionStateLessComp = ({ name, children }) => {
  return (
    <div>
      <p>Hello {name}!!!</p>
      {children}
    </div>
  );
};

export default FunctionStateLessComp;
