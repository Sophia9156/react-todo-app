import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { useState } from 'react';

function App() {
  const initial = [
    {title: '책 읽기', status: 'Unfulfilled', display: true},
    {title: '코딩하기', status: 'Unfulfilled', display: true},
    {title: '청소하기', status: 'Unfulfilled', display: true},
  ]

  const [todos, setTodo] = useState(initial);
  const addTodo = function(name) {
    let newTodo = [...todos, {title: name, status: 'Unfulfilled', display: true}]
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
  const selectFilter = function(button) {
    if(button === 'Done'){
      let newTodo = todos.map(item => {
        if(item.status === 'Unfulfilled') {
          return(
            {...item, display: false}
          )
        }else{
          return(
            {...item, display: true}
          )
        }
      })
      setTodo(newTodo);
    }else if(button === 'Unfulfilled'){
      let newTodo = todos.map(item => {
        if(item.status === 'Done') {
          return(
            {...item, display: false}
          )
        }else{
          return(
            {...item, display: true}
          )
        }
      })
      setTodo(newTodo);
    }else{
      let newTodo = todos.map(item => {
        return(
          {...item, display: true}
        )
      })
      setTodo(newTodo);
    }
  }

  return (
    <>
      <Header data={todos} onAdd={addTodo}/>
      <Main data={todos} onDelete={deleteTodo} onCheck={checkTodo} onSelect={selectFilter} />
      <Footer />
    </>
  );
}

export default App;
