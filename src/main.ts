import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

import { html, define, Component } from "hybrids";

interface Counter {
  count: number
}

function increaseCount(host: Counter) {
  host.count += 1;
}

export default define<Counter>({
  tag: "simple-counter",
  count: 0,
  render: ({ count }) => html`
    <button onclick="${increaseCount}">
      Count: ${count}
      <slot></slot>
    </button>
  `,
});

app.innerHTML = /*html*/`
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
  <simple-counter count="42">
    Hello world
  </simple-counter>
  `