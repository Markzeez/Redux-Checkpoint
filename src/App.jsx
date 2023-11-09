import React, { useState } from 'react';
import Task from './Component/Task';
import AddTask from './Component/AddTask';
import ListTask from './Component/ListTask';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'done', 'notDone'

  const handleAddTask = (newTask) => {
    setTasks([...tasks, { id: tasks.length + 1, ...newTask }]);
  };

  const handleToggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleEditTask = (taskId) => {
    // Implement task editing logic as needed
    console.log(`Edit task with ID ${taskId}`);
  };

  return (
    <div className='bg-slate-300 flex items-center justify-center h-screen rounded-xl'>
      <div className='flex flex-col justify-center items-center bg-slate-500 text-center w-fit 
      px-10 py-5 g  mt-10 rounded-sm pr-30 pl-30 space-y-5'>
      <h1 className='text-lg font-mono' >Task Manager</h1>
      <AddTask onAdd={handleAddTask} />
      <ListTask
        tasks={tasks}
        filter={filter}
        onToggle={handleToggleTask}
        onDelete={handleDeleteTask}
        onEdit={handleEditTask}
      />
      <div className='flex flex-col justify-center items-center bg-slate-500 text-center'>
        <label>
          Filter:
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="done">Done</option>
            <option value="notDone">Not Done</option>
          </select>
        </label>
      </div>
    </div>
    </div>
  );
};

export default App;
