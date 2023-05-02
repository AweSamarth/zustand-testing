import React from "react";
import create from "zustand";
import PrismCode from "react-prism";
import "prismjs";
import "prismjs/components/prism-jsx.min";
import "prismjs/themes/prism-okaidia.css";
import code from "./resources/code";

const useStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
  multed: 1,
  multiplier: () => set((state) => ({ multed: state.multed*5 })),
}));

function Counter() {
  const { count, inc } = useStore();
  const { multed, multiplier} = useStore();
  return (
    <div>
      <div class="counter">
        <span>{count}</span>
        <button onClick={inc}>one up</button>
      </div>
      
      <div>
        <span>{multed}</span><br />
        <button onClick={multiplier}>Multiply by 5</button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div class="main">
      <div class="code">
        <div class="code-container">
          <PrismCode className="language-jsx" children={code} />
          <Counter />
        </div>
      </div>
      <a
        href="https://github.com/drcmda/zustand"
        class="top-right"
        children="Github"
      />
      <a
        href="https://twitter.com/0xca0a"
        class="bottom-right"
        children="Twitter"
      />
      <span class="header-left">Zustand</span>
    </div>
  );
}
