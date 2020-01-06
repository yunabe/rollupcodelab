import * as React from "react";
import * as ReactDOM from "react-dom";

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const Hello = (props: HelloProps) => (
  <h1>
    Hello from {props.compiler} and {props.framework}!
  </h1>
);

export function render() {
  ReactDOM.render(
    <Hello compiler="xxx" framework="piyo" />,
    document.getElementById("container")
  );
}
