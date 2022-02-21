import Item from './Item';

export default function List({data, onDelete, onCheck}) {
  return(
    <section className="list">
      <ul>
        {data.map((todo, key) => <Item 
        key={key} 
        todo={todo} 
        onDelete={onDelete}
        onCheck={onCheck}
        />)}
      </ul>
    </section>
  )
}