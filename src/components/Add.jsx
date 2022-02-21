import { useRef } from 'react';

export default function Add({data, func}) {
  const inputRef = useRef();
  function onSubmit(e) {
    e.preventDefault();
    const name = inputRef.current.value;
    name && func(name);
  }

  return(
    <form className="addTodo" onSubmit={onSubmit}>
      <input ref={inputRef} type="text" placeholder="Add your tasks." id="addTodo" />
      <button>ADD</button>
    </form>
  )
}