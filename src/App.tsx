import React from 'react';
import { useReducer, useState, Reducer } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { TaskType, reducerTask } from './reducer/tasksReducer';

// const initialTasks: TaskType[] = [];
function App() {
  // const [tasks, setTasks] = useState<TaskType[]>([]);
  const [tasks, dispatch] = useReducer(reducerTask, []);

  const addCard = (text: string) => {
    dispatch({
      type: 'add',
      id: Math.random(),
      text: text,
    });
  };

  const deleteHandle = (id: number) => {
    dispatch({
      type: 'delete',
      id: id,
    });
  };

  const handleChangeTask = (task: TaskType) => {
    dispatch({
      type: 'changed',
      task: task,
    });
  };

  return (
    <>
      <h1>Day of in Kyto</h1>
      <AddTask addCard={addCard} />
      <TaskList
        tasks={tasks}
        delete={deleteHandle}
        onChangeTasks={handleChangeTask}
      />
    </>
  );
}

export default App;
