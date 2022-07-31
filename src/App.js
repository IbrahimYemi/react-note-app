import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Note from './Component/Note';
import TodoList from './Component/TodoList';

export default function App() {
  return (
    <div>
      <TodoList />
    </div>
  );
}
