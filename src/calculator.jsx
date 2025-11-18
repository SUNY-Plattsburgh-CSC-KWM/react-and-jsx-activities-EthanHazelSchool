function App() {
  const [currentValue, setCurrentValue] = React.useState(0);
  const [previousValue, setPreviousValue] = React.useState(currentValue);
  const [operation, setOperation] = React.useState(null); // plus, minus, multiply, divide

  function operate(op) {
    setOperation(op);
    setPreviousValue(currentValue);
    setCurrentValue(null);
  }

  return (
    <React.Fragment>
      <h1>Calculator</h1>
      <div className="calc">
        <span className="calc-value">{currentValue}</span>
        <div className="calc-num">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>0</button>
        </div>
        <div className="calc-operations">
          <button>+</button>
          <button>-</button>
          <button>*</button>
          <button>/</button>
          <button>=</button>
        </div>
      </div>
    </React.Fragment>
  );
}

const root = ReactDOM.render(<App />, document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
