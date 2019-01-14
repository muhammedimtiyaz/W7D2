import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {receiveTodo, receiveTodos} from "./actions/todo_actions";
import App from "./components/app";
import Root from './components/root';
import allTodos from "./reducers/selectors";

// function Root() {
//   return (
//   <h1>Hello</h1> 
//   );
// }
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('content');
  const store = configureStore();
  window.store = store;
  window.allTodos = allTodos;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  ReactDOM.render(<Root store={store} />, root);
});