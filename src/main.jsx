function Counter({ start = 0, increment = 1000, name = "Counter" }) {
  const [counter, setCounter] = React.useState(start);

  React.useEffect(() => {
    const tickTock = () => {
      setCounter((value) => value + 1);
    };

    const timer = setInterval(tickTock, increment);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <main>
      <p>
        {name}: {counter}
      </p>
      <button onClick={() => setCounter(0)}>Reset</button>
    </main>
  );
}

function Timer({ start = 100, increment = 1000, name = "Timer" }) {
  const [counter, setCounter] = React.useState(start);

  const tickTock = () => {
    setCounter((value) => value - 1);
  };

  React.useEffect(() => {
    const timer = setInterval(tickTock, increment);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="timer">
      <h3>{name}:</h3>
      <p>{counter <= 0 ? "DING DING DING DONE" : counter}</p>
      <button onClick={() => setCounter(start)}>Reset</button>
    </div>
  );
}

function Timers() {
  const [timers, setTimers] = React.useState([]);

  function addTimer(n, s, i, id) {
    setTimers((prev) => [...prev, { id: id, name: n, start: s, increment: i }]);
  }

  function TimerMaker() {
    const timerName = React.useRef(null);
    const timerDuration = React.useRef(null);
    const timerIncrement = React.useRef(null);

    return (
      <div className="maker">
        <input
          type="text"
          name="timer-name"
          id="timer-name"
          placeholder="Name"
          ref={timerName}
        />
        <input
          type="number"
          name="timer-duration"
          id="timer-duration"
          placeholder="Duration"
          ref={timerDuration}
        />
        <input
          type="number"
          name="timer-increment"
          id="timer-increment"
          placeholder="Increment (ms)"
          ref={timerIncrement}
        />
        <button
          onClick={() => {
            addTimer(
              timerName.current.value || "Unnamed",
              timerDuration.current.value || 10,
              timerIncrement.current.value || 1000
            );
          }}
        >
          Add Timer
        </button>
      </div>
    );
  }

  return (
    <div>
      <TimerMaker />
      {timers.map((timer, index) => (
        // fix this not updating with the variable
        <Timer
          key={index}
          start={timer.start}
          name={timer.name}
          increment={timer.increment}
          timerId={timer.id}
        />
      ))}
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Enterprise level timer app</h1>
      <Timers />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
