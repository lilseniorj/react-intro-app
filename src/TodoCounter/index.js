import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);

  return (
    <h2 className="TodoCounter">Haz compeltado {completedTodos} de {totalTodos} tareas</h2>
  )
}

export { TodoCounter };