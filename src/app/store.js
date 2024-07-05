import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/tasksSlice';

// Function to load the state from local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('tasks');
    if (serializedState === null) {
      console.log('No state found in local storage');
      return undefined; // Return undefined to let the reducers initialize the state
    }
    console.log('State loaded from local storage:', JSON.parse(serializedState));
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Error loading state from local storage:', err);
    return undefined; // If an error occurs, return undefined
  }
};

// Function to save the state to local storage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.tasks);
    localStorage.setItem('tasks', serializedState);
    console.log('State saved to local storage:', state.tasks);
  } catch (err) {
    console.error('Error saving state to local storage:', err);
  }
};

// Load the state from local storage
const preloadedState = loadState();

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  preloadedState: { tasks: preloadedState }, // Ensure the preloaded state is passed correctly
});

// Subscribe to store updates to save the state to local storage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
