import './App.css';
import { useState } from 'react';
import InputTask from './component/InputTask';
import TaskItem from './component/TaskItem';

function App() {

  const [todolist, setTodoList] = useState([]);

  // Add task Method
  const addTask = (taskName) => {
    const newTask = {taskName, checked: false};
    setTodoList([...todolist, newTask]);
  }

  // Toggle Checked Method

  const toggleCheck = (taskName) => {
    setTodoList((prevtodoList) =>
      prevtodoList.map((task) =>
      task.taskName === taskName ? {...task, checked: !task.checked}: task,
  )
    ); 
  }

  // Delete Method
  const deleteTask = (deleteTaskName) => {
    setTodoList(todolist.filter(task => task.taskName !== deleteTaskName));
  }

  console.log(todolist);

  return (
   <>
    <div className="container">
      <h1>To-Do list</h1>

      <InputTask addTask={addTask} />
      
      <div className="todoList">
        <ul className="list-items">
          {todolist.map((task, key) => (
            <TaskItem task={task} key={key} toggleCheck={toggleCheck} deleteTask={deleteTask}/>
          ))}
        </ul>

        {todolist.length === 0 ? (
          <p className='notify'>You're done</p>
        ): null}
      </div>

    </div>
   </>
  );
}

export default App;
