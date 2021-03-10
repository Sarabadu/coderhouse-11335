import React from "react";

export function ShowCount(props) {
  return (
    <div>
      {props.children}
      <h1>{props.count} </h1>
    </div>
  );
}
