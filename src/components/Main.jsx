import List from './List';
import Filter from './Filter';

export default function Main({data, onDelete, onCheck}) {
  return(
    <main>
      <Filter />
      <List data={data} onDelete={onDelete} onCheck={onCheck}/>
    </main>
  )
}