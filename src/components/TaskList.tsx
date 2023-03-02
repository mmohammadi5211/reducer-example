import { useState } from 'react';
import { TaskType } from '../reducer/tasksReducer';

interface Props {
  tasks: TaskType[];
  delete: (x: number) => void;
  onChangeTasks: (task: TaskType) => void;
}

const TaskList = (props: Props) => {
  return (
    <>
      <ul>
        {props.tasks.map((task, key) => (
          <li key={task.id}>
            <Task
              task={task}
              deleteTask={props.delete}
              onChange={props.onChangeTasks}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

interface PropsTask {
  task: TaskType;
  deleteTask: (id: number) => void;
  onChange: (task: TaskType) => void;
}

const Task = (props: PropsTask) => {
  const [edit, setEdit] = useState(false);

  const handleSave = () => {
    setEdit(false);
  };
  return (
    <div style={{ display: 'flex' }}>
      {edit ? (
        <input
          type='text'
          value={props.task.text}
          onChange={(e) => {
            props.onChange({
              ...props.task,
              text: e.target.value,
            });
          }}
        />
      ) : (
        <p> {props.task?.text} </p>
      )}

      <button onClick={() => props.deleteTask(props.task.id)}>Delete</button>
      {edit ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={() => setEdit(true)}>edit</button>
      )}
    </div>
  );
};
export default TaskList;
