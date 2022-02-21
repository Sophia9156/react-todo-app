import { useState} from 'react';

export default function Item({todo, onDelete, onCheck}) {
  let [check, setCheck] = useState(false);
  function deleteTodo() {
    onDelete(todo)
  }
  function clickCheck() {
    check = !check;
    setCheck(check);
    onCheck(todo)
  }
  return(
    <li>
      <span className="material-icons-outlined">
        label_important
      </span>
      <p className="title" style={!check ? null : {color: '#aaa', textDecoration: 'line-through'}}>{todo.title}</p>
      <p className="status">{todo.status}</p>
      <input type="checkbox" />
      <label onClick={clickCheck}>
        <span className="material-icons-outlined" style={!check ? null : {color: 'salmon'}}>
          task_alt
        </span>
      </label>
      <span onClick={deleteTodo} className="material-icons-outlined delete">
        delete
      </span>
    </li>
  )
}