import React, { useState } from "react";
import Widget from "./Widget";

function App() {
  // const [clicked, setClicked] = useState(0);

  // const click = () => {
  //   setClicked(clicked + 1);
  //   console.log("Yoooo I printed something to the console");
  // }

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // Update state methods
  const updateInput = (e) => {
    setInput(e.target.value);
  }

  const addTodo = () => {
    if(input !== "") {
      const updatedTodo = [...todos, input];
      setTodos(updatedTodo);
      setInput("");
    }
  }

  return (
    // <div style={{ textAlign: "center" }}>
    //   <Widget text="Web Impact is awesome!" click={click}/>
    //   <p>The button was clicked {clicked} times :)</p>
    // </div>
    <div className = "App">
      {/* provide input form */}
      <label htmlFor="newTodo"> Enter Todo Item: </label>
      
      <input type="text" id="newTodo" value={input} onChange={updateInput}></input>

      <button onClick={addTodo}>Enter</button>
    </div>
  );
}

export default App;
