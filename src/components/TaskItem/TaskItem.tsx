import { useDispatch } from 'react-redux';
import { Task } from '../../containers/types';
import { toggleTask, deleteTask } from '../../containers/taskSlice';

interface Props {
    task: Task;
    index: number;
    className?: string;
  }
  
  const TaskItem: React.FC<Props> = ({ task, index, className }) => {
    const dispatch = useDispatch();
  
    return (
      <div className="flex flex-col bg-white shadow rounded-lg p-6 my-2">
        <span className="mr-4">{index + 1}.</span>
        <span className="flex-grow text-lg font-medium">{task.title} - {task.completed ? 'Completed' : 'Not Completed'}</span>
        <p className="text-gray-600">{task.description}</p>
        <div className="mt-2">
          <button 
            onClick={() => dispatch(toggleTask(task.id))}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 ${className}`}
          >
            Toggle
          </button>
          <button 
            onClick={() => dispatch(deleteTask(task.id))}
            className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ${className}`}
          >
            Delete
          </button>
        </div>
      </div>
    );
  };

export default TaskItem;