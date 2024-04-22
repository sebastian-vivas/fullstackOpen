import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const points = new Uint8Array(8);
  const [copy, setCopy] = useState([...points]);
  const [n, setN] = useState(copy[selected]);

  const castVote = () => {
    copy[selected] += 1;
    setCopy(copy);
    setN(copy[selected]);
  };

  const nextAnec = () => {
    const randomNumber = Math.floor(Math.random() * 8);
    setN(copy[randomNumber]);
    setSelected(randomNumber);
  };

  const findLargestIndex = (arr) => {
    let largest = arr[0];
    let largestIndex = 0;

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
        largestIndex = i;
      }
    }
    return largestIndex;
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {n} votes</p>
      <button onClick={nextAnec}> next anecdote</button>{" "}
      <button onClick={castVote}>vote</button>
      <h1>Anecdote with the most votes</h1>
      <p>{anecdotes[findLargestIndex(copy)]}</p>
      <p>has {copy[findLargestIndex(copy)]} votes</p>
    </div>
  );
};

export default App;
