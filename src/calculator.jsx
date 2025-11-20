function App() {
  const inputOne = React.useRef(0);
  const inputTwo = React.useRef(0);
  const operation = React.useRef("plus");

  const [answer, setAnswer] = React.useState(0);

  function Calculate() {
    const one = parseInt(inputOne.current.value) || 0;
    const two = parseInt(inputTwo.current.value) || 0;
    const operator = operation.current.value || "plus"; // shouldn't ever trigger the || but just in case I guess

    switch (operator) {
      case "plus":
        return setAnswer(one + two);
      case "minus":
        return setAnswer(one - two);
      case "multiply":
        return setAnswer(one * two);
      case "divide":
        return setAnswer(one / two);
    }
  }

  return (
    <React.Fragment>
      <h1>Calculator</h1>
      <p>
        This calculator sucks but I didn't want to implement a number pad or
        anything
      </p>
      <div className="calc">
        <input
          type="number"
          name="input-1"
          id="input-1"
          placeholder="0"
          ref={inputOne}
        />
        <select name="operation" id="operation" ref={operation}>
          <option value="plus">+</option>
          <option value="minus">-</option>
          <option value="multiply">*</option>
          <option value="divide">/</option>
        </select>
        <input
          type="number"
          name="input-2"
          id="input-2"
          placeholder="0"
          ref={inputTwo}
        />
        <button onClick={() => Calculate()}>=</button>
      </div>
      <p>Invalid numbers will be treated as 0</p>
      <p className="answer">{answer}</p>
    </React.Fragment>
  );
}

const root = ReactDOM.render(<App />, document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
