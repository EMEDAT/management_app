import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

// Define RootState type
export type RootState = ReturnType<typeof store.getState>;