import React from 'react'

const TaskItem = ({task, toggleCheck, deleteTask}) => {
  return (
    <li className='items'>
      <div className="items-text">
        <input type="checkbox" checked={task.checked} onChange={() => toggleCheck(task.taskName)}/>
        <p className={task.checked ? 'isChecked' : ""}>{task.taskName}</p>
      </div>
      <button className='btn' onClick={() => deleteTask(task.taskName)}>delete</button>
    </li>
  )
}

export default TaskItem;
