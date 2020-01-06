import { sayHello } from "./mylib";
import { render } from "./view";

export function entryPoint(): void {
  sayHello("rollup");
  render();
}

entryPoint();
