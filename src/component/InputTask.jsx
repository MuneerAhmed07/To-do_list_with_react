import { useState } from "react";

const InputTask = ({addTask}) => {

    const [task, setTask] = useState('');
    // console.log(task)

    // Handle input Value
    const handleInputValue = (event) => {
        setTask(event.target.value);
    }

    // HandleaddTask Method
    const handleAddTask = (event) => {
        event.preventDefault();
        if(task.trim() === '') return;
        addTask(task);
        setTask("");
    }

  return (
    <>
        <form onSubmit={handleAddTask}>
            <input value={task} type="text" placeholder='add item...' onChange={handleInputValue} />
            <button>Add</button>
        </form>
    </>
  )
}

export default InputTask;
