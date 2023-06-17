import React from 'react';
import TaskList from './lists/TaskList';
import Settings from './settings/Settings';
import Counter from './counter/Counter';
/**
 * Anonymus function that returns the principal component of the application
 * @returns {React.Component} Principal component of the application
 */
const App = () => {
  return (
    <TaskList />
    // <Settings />
    // <Counter />
  );
};

export default App;