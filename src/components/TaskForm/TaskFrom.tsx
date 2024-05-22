import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../containers/taskSlice';

const TaskForm: React.FC = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      return;
    }
    dispatch(addTask(title, description));
    setTitle('');
    setDescription('');
  };
  
  return (
    <form onSubmit={submitForm}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task description"
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;