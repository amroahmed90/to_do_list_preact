import { h } from 'preact';
import { signal } from "@preact/signals";

const count = signal(0);

const App = () => {
  const increment = () => count.value++;

  return (
    <div id="app">
      <h1>Count: {count.value}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default App;
