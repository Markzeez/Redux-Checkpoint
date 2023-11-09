// ListTask.js
import React from 'react';
import Task from './Task';

const ListTask = ({ tasks, filter, onToggle, onDelete, onEdit }) => {
  const filteredTasks = filter === 'done' ? tasks.filter(task => task.isDone) : tasks;

  return (
    <div>
      <h2>Task List</h2>
      <div>
        {filteredTasks.map(task => (
          <Task key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
        ))}
      </div>
    </div>
  );
};

export default ListTask;
