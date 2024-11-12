import React, { useState } from "react";

const Todo = () => {
  const [task, setTasks] = useState([]);
  const [input, setInput] = useState("");

  function add() {
    if (input.trim()) {
      setTasks([...task, { text: input, complete: false }]);
      setInput("");
    }
  }

  function deleteTask(index) {
    // Make a copy of the current tasks
    const updatedTasks = [...task];

    // Remove 1 item at the specified index
    updatedTasks.splice(index, 1);

    // Update the tasks state with the new list
    setTasks(updatedTasks);
  }

  function markAsDone(index) {
    // Make a copy of the tasks array
    const updatedTasks = [...task];

    // Toggle the `completed` status of the task at the specified index
    updatedTasks[index].completed = !updatedTasks[index].completed;

    // Update the tasks state with the modified list
    setTasks(updatedTasks);
  }

  return (
    <>
      <div style={{width:'500px'}}>
      <h1>TODO APP</h1>
      <div style={{display:"flex",alignItems: 'center',justifyContent:'center',gap:'10px'}}>
      <input
        className="work"
        placeholder="Enter the work here"
        value={input}
        onChange={(e) => setInput(e.target.value)} // Update input state
      />
      <button className="add" onClick={add} >
        ADD
      </button>
      </div>
      
      <br />
      <div style={{display:"flex",alignItems: 'center',justifyContent:'center',flexDirection:'column',gap:'10px'}}>
        {task.map((task, index) => (
          <div
            key={index}
            style={{display:"flex",alignItems: 'center', 
    gap: '10px' }}
            
          >
            <p style={{textDecoration: task.completed ? "line-through" : "none"}}>{task.text}</p>
            <button onClick={() => deleteTask(index)}>Delete</button>
            <button onClick={() => markAsDone(index)}>
              {task.completed ? "Undo" : "Done"}
            </button>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default Todo;
