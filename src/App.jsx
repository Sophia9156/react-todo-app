import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { useState } from 'react';

function App() {
  const initial = [
    {title: 'reading a book', status: 'unfulfilled'},
    {title: 'coding', status: 'unfulfilled'},
    {title: 'cleaning', status: 'unfulfilled'},
  ]

  const [todos, setTodo] = useState(initial);
  const addTodo = function(name) {
    let newTodo = [...initial, {title: name, status: 'unfulfilled'}]
    setTodo(newTodo)
  }
  const deleteTodo = function() {
    
  }

  return (
    <>
      <Header data={todos} func={addTodo}/>
      <Main data={todos} />
      <Footer />
    </>
  );
}

export default App;
