import React from "react";

export default function Counter({ start }) {
  const [counter, setCounter] = React.useState(start);

  React.useEffect(() => {
    const tickTock = () => {
      setCounter((value) => value + 1);
    };

    const timer = setInterval(tickTock, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []); // [] tells it to only run once

  return (
    <main>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(0)}>Reset</button>
    </main>
  );
}
