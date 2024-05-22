import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { Task } from './types'; // import Task type
import { RootState } from './store';

interface TaskPayload {
  title: string;
  completed: boolean;
}

const initialState: Task[] = [];

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: {
      reducer: (state, action: PayloadAction<Task>) => {
        state.push(action.payload);
      },
      prepare: (title: string, description: string = '') => {
        return { payload: { id: uuidv4(), title, completed: false, description } };
      },
    },
    loadTask: (state, action: PayloadAction<Task>) => {
      state.push(action.payload);
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      return state.filter(task => task.id !== action.payload);
    },
  },
});

export const selectTasks = (state: RootState) => state.tasks;

export const { addTask, loadTask, toggleTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;