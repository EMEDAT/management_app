import { useSelector } from 'react-redux';
import { RootState } from '../../containers/store';
import TaskItem from '../TaskItem/TaskItem';
import { selectTasks } from '../../containers/taskSlice'; // replace with the actual path to selectTasks
import { Task } from '../../containers/types'; // replace with the actual path to the Task type

const TaskList: React.FC = () => {
  const tasks: Task[] = useSelector(selectTasks);

  const completedTasks = tasks.filter(task => task.completed);
  const notCompletedTasks = tasks.filter(task => !task.completed);

  return (
    <div className="flex flex-col justify-between mx-4">
      <div className="w-full mb-4">
        <h2 className="text-blue-500 text-center font-bold py-4 px-2 shadow-md text-2xl my-4">Not Completed</h2>
        {notCompletedTasks.map((task, index: number) => (
          <TaskItem task={task} index={index} key={task.id} className="py-1 text-sm" />
        ))}
      </div>
  
      <div className="w-full">
        <h2 className="text-green-500 text-center font-bold py-4 px-2 shadow-md text-2xl my-4">Completed</h2>
        {completedTasks.map((task, index: number) => (
          <TaskItem task={task} index={index} key={task.id} className="py-1 text-sm" />
        ))}
      </div>
    </div>
  );
};

export default TaskList;