import List from './List';
import Filter from './Filter';

export default function Main({data}) {
  return(
    <main>
      <Filter />
      <List data={data} />
    </main>
  )
}