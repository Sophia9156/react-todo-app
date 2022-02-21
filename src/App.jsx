import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { useState } from 'react';

function App() {
  const initial = [
    {title: '책 읽기', status: 'Unfulfilled'},
    {title: '코딩하기', status: 'Unfulfilled'},
    {title: '청소하기', status: 'Unfulfilled'},
  ]

  const [todos, setTodo] = useState(initial);
  const addTodo = function(name) {
    let newTodo = [...todos, {title: name, status: 'Unfulfilled'}]
    setTodo(newTodo)
  }
  const deleteTodo = function(todo) {
    let newTodo = todos.filter((item) => item.title !== todo.title)
    setTodo(newTodo)
  }
  const checkTodo = function(todo) {
    let newTodo = todos.map(item => {
      if(item.title === todo.title) {
        if(item.status === 'Unfulfilled'){
          return(
            {...todo, status: 'Done'}
          )
        }else{
          return(
            {...todo, status: 'Unfulfilled'}
          )
        }
      }
      return item;
    })
    setTodo(newTodo)
  }

  return (
    <>
      <Header data={todos} onAdd={addTodo}/>
      <Main data={todos} onDelete={deleteTodo} onCheck={checkTodo}/>
      <Footer />
    </>
  );
}

export default App;
