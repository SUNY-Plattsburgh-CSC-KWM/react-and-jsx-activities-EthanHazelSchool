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
    <main>
      <p>
        {name}: {counter <= 0 ? "DING DING DING DONE" : counter}
      </p>
      <button onClick={() => setCounter(start)}>Reset</button>
    </main>
  );
}

function Timers() {
  const [timers, setTimers] = React.useState([
    { name: "test", start: 10, increment: 1000 },
  ]);

  function addTimer(n, s, i) {
    let newTimers = timers;
    newTimers.push({ name: n, start: s, increment: i });
    setTimers(newTimers);
    console.log(timers);
  }

  function TimerMaker() {
    return (
      <button
        onClick={() => {
          addTimer("test", 10, 1000);
        }}
      >
        Make Test Timer
      </button>
    );
  }

  return (
    <div>
      {timers.map((timer, index) => (
        // fix this not updating with the variable
        <Timer
          key={index}
          start={timer.start}
          name={timer.name}
          increment={timer.increment}
        />
      ))}
      <hr />
      <TimerMaker />
    </div>
  );
}

function App() {
  return (
    <div>
      <h2>Counters</h2>
      <Counter />
      <Counter increment={1} name="Millisecond counter" />
      <h2>Timers</h2>
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
