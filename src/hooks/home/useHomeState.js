import { useState } from 'react';

export default props => {
  const [initialData, setInitialData] = useState(props);
  return {
    initialData,
    addTodo: newTodoText => {
      setInitialData([
        ...initialData,
        { id: 1, task: newTodoText, completed: false }
      ]);
    }
  };
};
