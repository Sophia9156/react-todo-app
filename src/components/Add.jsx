import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';

export default function Add({userId, database}) {
  const dispatch = useDispatch();
  const inputRef = useRef();
  function onSubmit(e) {
    e.preventDefault();
    let name = inputRef.current.value;
    name && dispatch(addTodo(name));
    inputRef.current.value = '';
    database.writeData(userId, name);
  }

  return(
    <form className="addTodo" onSubmit={onSubmit}>
      <input ref={inputRef} type="text" placeholder="Add your tasks." id="addTodo" />
      <button>ADD</button>
    </form>
  )
}