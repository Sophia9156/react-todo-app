import Item from './Item';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { readTodo } from '../redux/actions';

export default function List({userId, database}) {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  useEffect(() => {
    if(!userId) {
      return;
    }
    database.listenData(userId).then(res => {
      dispatch(readTodo(res));
    });
  },[database, dispatch, userId]);

  return(
    <section className="list">
      <ul>
        {todos.map((todo, key) => <Item 
        key={key} 
        todo={todo} 
        database={database}
        userId={userId}
        />)}
      </ul>
    </section>
  )
}