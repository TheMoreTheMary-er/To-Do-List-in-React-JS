import {useState} from 'react';
import TaskInput from "./components/TaskInput";

function App() {
  const[toDoList, setToDoList] = useState([]);
  const addTask = (taskName) =>{
    const newTask = {taskName, checked: false};
    setToDoList([...toDoList, newTask])
  };
  return (
    <>
    <div className ="container">
     <h1>Skibidi Toilet</h1>

     <TaskInput addTask={addTask}/>
     
     <div className="toDoList">
      <span>To Do</span>
      <ul className="list-items">

      </ul>
     </div>
    </div>
    </>
  );
}

export default App;
