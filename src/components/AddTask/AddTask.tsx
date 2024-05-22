import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../containers/taskSlice';
import "./AddTask.css";

const AddTask: React.FC = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      return;
    }
    dispatch(addTask(title, description)); 
    setTitle('');
    setDescription(''); 
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center mt-5 w-full">
      <input 
        value={title} 
        onChange={e => setTitle(e.target.value)} 
        className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter task"
      />
        <textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
        className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3 overflow-auto scrollbar-hide"
        placeholder="Enter description"
        />
      <button 
        type="submit" 
        className="ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;