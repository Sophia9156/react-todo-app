import Item from './Item';
import { useSelector } from 'react-redux';

export default function List() {
  const todos = useSelector(state => state.todos);

  return(
    <section className="list">
      <ul>
        {todos.map((todo, key) => <Item 
        key={key} 
        todo={todo} 
        />)}
      </ul>
    </section>
  )
}