import Item from './Item';

export default function List({data}) {
  return(
    <section className="list">
      <ul>
        {data.map((todo, key) => <Item key={key} todo={todo} />)}
      </ul>
    </section>
  )
}