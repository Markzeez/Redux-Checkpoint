// Task.js
import React from 'react';

const Task = ({ task, onToggle, onDelete, onEdit }) => {
  const { id, description, isDone } = task;

  return (
    <div className={`task  flex flex-col justify-center ${isDone ? 'done' : ''}`}>
      <span>{description}</span>
      <div>
        <button onClick={() => onToggle(id)}>{isDone ? 'Undo' : 'Done'}</button>
        <button onClick={() => onDelete(id)}>Delete</button>
        <button onClick={() => onEdit(id)}>Edit</button>
      </div>
    </div>
  );
};

export default Task;
