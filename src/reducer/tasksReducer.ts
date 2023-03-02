export type TaskType = {
  id: number;
  text: string;
};

type Action =
  | { type: 'add'; id: number; text: string }
  | { type: 'delete'; id: number }
  | { type: 'changed'; task: TaskType };

export const reducerTask = (
  tasks: TaskType[],
  action: Action
): Array<TaskType> => {
  switch (action.type) {
    case 'add': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
        },
      ];
    }
    case 'delete': {
      return tasks.filter((t) => t.id !== action.id);
    }
    case 'changed': {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    default: {
      throw Error('Unknown action: ' + action);
    }
  }
};
