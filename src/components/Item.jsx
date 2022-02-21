import { useDispatch } from "react-redux";
import { deleteTodo, completeTodo } from '../redux/actions';

export default function Item({todo}) {
  const dispatch = useDispatch();
  function onDelete() {
    dispatch(deleteTodo(todo))
  }
  function clickCheck() {
    dispatch(completeTodo(todo))
  }
  return(
    <li style={todo.display ? {display: 'flex'} : {display: 'none'}}>
      <span className="material-icons-outlined" style={todo.status === 'Done' ? {color: '#aaa'} : null}>
        label_important
      </span>
      <p className="title" style={todo.status === 'Done' ? {color: '#aaa', textDecoration: 'line-through'} : null}>{todo.title}</p>
      <p className="status">{todo.status}</p>
      <input type="checkbox" />
      <label onClick={clickCheck}>
        <span className="material-icons-outlined" style={todo.status === 'Done' ? {color: 'salmon'} : null}>
          task_alt
        </span>
      </label>
      <span onClick={onDelete} className="material-icons-outlined delete">
        delete
      </span>
    </li>
  )
}