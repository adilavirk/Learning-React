// import { useEffect, useRef } from "react";
import { useEffect, useState } from "react";
import useCustomHook from "./hooks/useCustomHook";
// import useCustomHook from "./hooks/useCustomHook";

function App() {
  // custom hook code

  // const [items, setItems] = useState({});
  // useEffect(() => {
  //   const getData = async () =>
  //     await fetch(`https://jsonplaceholder.typicode.com/posts`)
  //       .then((response) => response.json())
  //       .then((data) => setItems(data));
  //   getData();
  // }, []);
  // console.log(typeof items);

  // const [counter, setCounter] = useState(0);
  // const [resourceType, setResourceType] = useState("posts");
  // const [name, setName] = useState("");

  // const addValue = () => {
  //   // console.log(counter);
  //   // counter = counter + 1;
  //   setCounter(counter + 1);
  // };
  // const subValue = () => {
  //   setCounter(counter - 1);
  // };
  //useEffect hook
  // useEffect(() => {
  //   console.log("Component Mounted!!");
  // }, []);

  // useEffect(() => {
  //   console.log("Component Updated!!");
  // }, [subValue]);

  // useEffect(() => {
  //   console.log("component Mounted!!");
  // }, []);

  // useEffect(() => {
  //   console.log("component updated!");

  //for cleanup

  //   return () => {
  //     console.log("Cleanup what we did last time");
  //   };
  // }, [resourceType]);
  // // useRef Hook

  // const renderCount = useRef(1);
  // const inputRef = useRef(); //inputRef is an object here.
  // const prevName = useRef("");

  // useEffect(() => {
  //   prevName.current = name;
  // }, [name]);

  // useEffect(() => {
  //   renderCount.current = renderCount.current + 1;
  // });
  // const focus = () => {
  //   inputRef.current.focus();
  // };

  //custom hook
  const items = useCustomHook();
  console.log(items);
  return (
    <>
      <h1>Learning React</h1>
      {/* //custom hook */}
      {items.map((item) => (
        <pre key={item.id}>{JSON.stringify(item)}</pre>
      ))}
      {/* <h2>Counter Vlaue:{counter}</h2> */}
      {/* <button onClick={add Value}>Add Value</button>
      <button onClick={subValue}>remove Value</button> */}
      {/* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        dolore eum veniam {counter}
      </p> */}
      {/* useEffect hook */}
      {/* <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("users")}>Users</button>
      <button onClick={() => setResourceType("components")}>Components</button> */}
      {/* <h1>{resourceType}</h1>

      <h1>useRef hook</h1>

      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      <h3>My previous name is {prevName.current}</h3>

      <button onClick={focus}>Focus</button>

      <h2>I redered {renderCount.current} times.</h2> */}
    </>
  );
}

export default App;
