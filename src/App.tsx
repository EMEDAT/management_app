import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Task } from './containers/types';
import { loadTask } from './containers/taskSlice';
import AddTask from './components/AddTask/AddTask';
import TaskList from './components/TaskList/TaskList';
import { RootState } from './containers/store';
import  images  from './constants/images';


const App: React.FC = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks);
  
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const uniqueTasks = Array.from(new Set(savedTasks.map((task: Task) => task.id)))
      .map(id => {
        return savedTasks.find((task: Task) => task.id === id);
      });
    uniqueTasks.forEach((task: Task) => {
      dispatch(loadTask(task));
    });
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <div className="w-full flex items-center justify-start p-6 mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-md">
        <img src={images.PUFFLES} alt="Logo" className="h-12 w-auto hover:scale-110 transition-transform duration-200" />
      </div>
      <div className='header'>
        <h1 className='text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-center text-purple-700 font-extrabold tracking-wide shadow-text'>Puffles Task Manager</h1>
      </div>
      <div className='bottom'>
      <AddTask />
      <TaskList />
      </div>
    </div>
  );
};

export default App;