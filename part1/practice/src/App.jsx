/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./components/Button";
import Display from "./components/Display";
import Hello from "./components/Hello";

const App = () => {
  const name = "Peter";
  const age = 10;
  const [counter, setCounter] = useState(0);
  const addOne = () => setCounter(counter + 1);
  const resetToZero = () => setCounter(0);
  // const App = (props) => {
  // const { counter } = props;
  // const handleClick = () => console.log('clicked');
  // setTimeout(() => setCounter(counter + 1), 1000);

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Display counter={counter} />
      <Button onClick={addOne} text="add" />
      <Button onClick={resetToZero} text="reset" />
      <br />
      {/* <div>{counter}</div>
      <button onClick={() => console.log('clicked')}>plus</button>
      <button onClick={addOne}>plus</button>
      <button onClick={resetToZero}>reset</button> */}
    </div>
  );
};

export default App;
