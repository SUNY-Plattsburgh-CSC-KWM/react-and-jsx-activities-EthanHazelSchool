function Counter({ start }) {
  const [counter, setCounter] = React.useState(start);
  return (
    <main>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter((value) => value + 1)}>
        Increment
      </button>
    </main>
  );
}

function App() {
  return (
    <div>
      <Counter start={0} />
      <Counter start={123} />
      <Counter start={-64} />
    </div>
  );
}

const root = ReactDOM.render(<App />, document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
