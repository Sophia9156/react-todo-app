export const READ_TODO = 'READ_TODO';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SELECT_FILTER = 'SELECT_FILTER';
export const SELECT_BTN = 'SELECT_BTN';

export function readTodo(data) {
  return {
    type: READ_TODO,
    data
  }
}

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

export function deleteTodo(todo) {
  return {
    type: DELETE_TODO,
    todo
  }
}

export function completeTodo(todo) {
  return {
    type: COMPLETE_TODO,
    todo
  }
}

export function selectFilter(button) {
  return {
    type: SELECT_FILTER,
    button
  }
}

export function selectBtn(text) {
  return{
    type: SELECT_BTN,
    text
  }
}