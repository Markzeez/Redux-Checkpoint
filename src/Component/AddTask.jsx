// AddTask.js
import React, { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [description, setDescription] = useState('');

  const handleAddTask = () => {
    if (description.trim() !== '') {
      onAdd({ description, isDone: false });
      setDescription('');
    }
  };

  return (
    <div className='flex flex-col justify-start items-start gap-2'>
      <h2>Add Task</h2>
      <div className=' flex gap-3'>
        <input
          type="text"
          placeholder="Enter task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className='px-2 py-1 rounded-3xl bg-black text-white' onClick={handleAddTask}>Add Task</button>
      </div>
    </div>
  );
};

export default AddTask;
