import List from './List';
import Filter from './Filter';

export default function Main({data, onDelete, onCheck, onSelect}) {
  return(
    <main>
      <Filter onSelect={onSelect} />
      <List data={data} onDelete={onDelete} onCheck={onCheck}/>
    </main>
  )
}