import { useDispatch } from "react-redux";
import { deleteTodo, completeTodo } from '../redux/actions';

export default function Item({todo, database, userId}) {
  const dispatch = useDispatch();

  function onDelete() {
    dispatch(deleteTodo(todo));
    database.removeData(userId, todo.title);
  }
  function clickCheck() {
    dispatch(completeTodo(todo));
    database.editData(userId, todo.title, todo.status, todo.display);
  }

  return(
    <li style={todo.display && todo.display ? {display: 'flex'} : {display: 'none'}}>
      <span className="material-icons-outlined" style={todo.status === 'Done' ? {color: '#aaa'} : {color: 'tomato'}}>
        label_important
      </span>
      <p className="title" style={todo.status && todo.status === 'Done' ? {color: '#aaa', textDecoration: 'line-through'} : null}>{todo.title}</p>
      <p className="status" style={todo.status && todo.status === 'Done' ? {backgroundColor: '#888'} : null}>{todo.status}</p>
      <input type="checkbox" />
      <label onClick={clickCheck}>
        <span className="material-icons-outlined" style={todo.status && todo.status === 'Done' ? {color: 'salmon'} : null}>
          task_alt
        </span>
      </label>
      <span onClick={onDelete} className="material-icons-outlined delete">
        delete
      </span>
    </li>
  )
}