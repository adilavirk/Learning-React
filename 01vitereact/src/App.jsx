import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    // console.log(counter);
    // counter = counter + 1;
    setCounter(counter + 1);
  };
  const subValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Learn React</h1>
      <h2>Counter Vlaue:{counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <button onClick={subValue}>remove Value</button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        dolore eum veniam {counter}
      </p>
    </>
  );
}

export default App;
